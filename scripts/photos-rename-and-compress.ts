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

// Get all images from photos-original folder
const files = (await fg('**/*.{jpg,png,jpeg,JPG,PNG,JPEG}', {
  caseSensitiveMatch: false,
  absolute: true,
  cwd: originalFolder,
}))
  .sort((a, b) => a.localeCompare(b))

console.log(`Found ${files.length} images to process...`)

for (const filepath of files) {
  const filename = basename(filepath)

  // Skip files that are already renamed (start with 'p-')
  if (filename.startsWith('p-')) {
    // Check if compressed version exists, if not, create it
    const compressedPath = join(compressedFolder, filename)
    if (!existsSync(compressedPath)) {
      console.log(`[MISSING] Creating compressed version for: ${filename}`)
      try {
        const buffer = await fs.readFile(filepath)
        const img = sharp(buffer)
        const { outBuffer, percent } = await compressSharp(img, buffer, filepath, compressedPath)
        await fs.writeFile(compressedPath, outBuffer)
        console.log(`[COMPRESS] Created compressed: ${filename} (${(percent * 100).toFixed(1)}%)`)
      } catch (error) {
        console.error(`Error creating compressed version for ${filename}:`, error)
      }
    } else {
      console.log(`[SKIP] Already processed: ${filename}`)
    }
    continue
  }

  let { ext } = parse(filepath.toLowerCase())
  if (ext === '.jpeg')
    ext = '.jpg'

  try {
    const buffer = await fs.readFile(filepath)
    const img = sharp(buffer)
    const exif = ExifReader.load(buffer)

    // Extract date from EXIF or file stats
    let dateRaw = exif.DateTimeOriginal?.value || exif.DateTime?.value || exif.DateCreated?.value
    dateRaw ||= new Date(await fs.stat(filepath).then(stat => stat.birthtime || stat.mtime)).toISOString()
    if (Array.isArray(dateRaw))
      dateRaw = dateRaw[0] as string
    dateRaw = String(dateRaw)

    // Convert date format: 2025:02:02 10:07:10 to date object
    let date = new Date(dateRaw.replace(/:/g, (x, idx) => {
      if (idx < 10)
        return '-'
      return x
    }))
    if (Number.isNaN(+date)) {
      console.warn(`Invalid date for ${filepath}, using current time`)
      date = new Date()
    }

    // Generate new filename
    const base = `p-${date.toISOString().replace(/[:.a-z]+/gi, '-')}`
    let index = 1
    while (existsSync(join(originalFolder, `${base}${index}${ext}`.toLowerCase())))
      index++
    
    const newFilename = `${base}${index}${ext}`.toLowerCase()
    const newOriginalPath = join(originalFolder, newFilename)
    const compressedPath = join(compressedFolder, newFilename)

    // Rename original file (no compression)
    await fs.rename(filepath, newOriginalPath)
    console.log(`[RENAME] ${filename} -> ${newFilename}`)

    // Generate and save compressed version
    const { outBuffer, percent } = await compressSharp(img, buffer, filepath, compressedPath)
    await fs.writeFile(compressedPath, outBuffer)
    console.log(`[COMPRESS] Saved compressed: ${newFilename} (${(percent * 100).toFixed(1)}%)`)

  } catch (error) {
    console.error(`Error processing ${filepath}:`, error)
  }
}

console.log('Processing complete!')
