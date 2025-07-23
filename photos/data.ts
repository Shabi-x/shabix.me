export interface PhotoMate {
  text?: string
  lang?: string
}

export interface Photo extends PhotoMate {
  name: string
  url: string
  originalUrl: string
}

const metaInfo = Object.entries(
  import.meta.glob<PhotoMate>('../photos-compressed/**/*.json', {
    eager: true,
    import: 'default',
  }),
).map(([name, data]) => {
  name = name.replace(/\.\w+$/, '').replace(/^\.\.\/photos-compressed\//, '')
  return {
    name,
    data,
  }
})

// Load compressed images for display
const compressedPhotos = Object.entries(
  import.meta.glob<string>('../photos-compressed/**/*.{jpg,png,JPG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

// Load original images for full-size viewing
const originalPhotos = Object.entries(
  import.meta.glob<string>('../photos-original/**/*.{jpg,png,JPG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

const photos = compressedPhotos
  .map(([name, url]): Photo => {
    name = name.replace(/\.\w+$/, '').replace(/^\.\.\/photos-compressed\//, '')

    // Find corresponding original image
    const originalEntry = originalPhotos.find(([originalName]) => {
      const cleanOriginalName = originalName.replace(/\.\w+$/, '').replace(/^\.\.\/photos-original\//, '')
      return cleanOriginalName === name
    })

    const originalUrl = originalEntry ? originalEntry[1] : url // fallback to compressed if original not found

    return {
      ...metaInfo.find(info => info.name === name)?.data,
      name,
      url, // compressed image for display
      originalUrl, // original image for full-size viewing
    }
  })
  .sort((a, b) => b.name.localeCompare(a.name))

export default photos
