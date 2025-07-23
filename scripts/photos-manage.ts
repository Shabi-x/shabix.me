import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import ExifReader from 'exifreader'
import fg from 'fast-glob'
import { basename, join, parse } from 'pathe'
import sharp from 'sharp'
import { compressSharp } from './img-compress'

const originalFolder = fileURLToPath(new URL('../photos-original', import.meta.url))
const compressedFolder = fileURLToPath(new URL('../photos-compressed', import.meta.url))

const files = (await fg('**/*.{jpg,png,jpeg}', {
  caseSensitiveMatch: false,
  absolute: true,
  cwd: fileURLToPath(new URL('../photos', import.meta.url)),
}))
  .sort((a, b) => a.localeCompare(b))

for (const filepath of files) {
  if (basename(filepath).startsWith('p-')) {
    continue
  }
  let { ext } = parse(filepath.toLowerCase())
  if (ext === '.jpeg')
    ext = '.jpg'
  const buffer = await fs.readFile(filepath)
  const img = await sharp(buffer)
  const exif = await ExifReader.load(buffer)

  let title: string | undefined

  let dateRaw = exif.DateTimeOriginal?.value || exif.DateTime?.value || exif.DateCreated?.value
  dateRaw ||= new Date(await fs.stat(filepath).then(stat => stat.birthtime || stat.mtime)).toISOString()
  if (Array.isArray(dateRaw))
    dateRaw = dateRaw[0] as string
  dateRaw = String(dateRaw)

  // convert 2025:02:02 10:07:10 to date object
  let date = new Date(dateRaw.replace(/:/g, (x, idx) => {
    if (idx < 10)
      return '-'
    return x
  }))
  if (Number.isNaN(+date)) {
    date = new Date()
  }

  const timeDiff = Date.now() - +date
  // 1 hour
  if (timeDiff < 1000 * 60 * 60) {
    console.warn(`Date of ${filepath} is too recent: ${dateRaw}`)
    continue
  }

  const base = `p-${date.toISOString().replace(/[:.a-z]+/gi, '-')}`
  let index = 1
  while (existsSync(join(originalFolder, `${base}${index}${ext}`.toLowerCase())))
    index++

  const filename = `${base}${index}${ext}`.toLowerCase()
  const originalPath = join(originalFolder, filename)
  const compressedPath = join(compressedFolder, filename)

  // Save original image (renamed but not compressed) - just copy the original buffer
  await fs.writeFile(originalPath, buffer)
  console.log(`[ORIG] Saved original (no compression): ${originalPath}`)

  // Generate and save compressed image
  const { outBuffer, percent } = await compressSharp(img, buffer, filepath, compressedPath)
  await fs.writeFile(compressedPath, outBuffer)
  console.log(`[COMP] Saved compressed: ${compressedPath} (${(percent * 100).toFixed(1)}%)`)

  // Remove original file from photos folder
  if (filepath !== originalPath)
    await fs.unlink(filepath)

  if (title) {
    await fs.writeFile(compressedPath.replace(/\.\w+$/, '.json'), JSON.stringify({ text: title }, null, 2))
  }
}
