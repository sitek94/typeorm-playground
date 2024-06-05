import {AppDataSource} from './data-source'
import {Album} from './entities/album.entity'
import {PhotoMetadata} from './entities/photo-metadata.entity'
import {Photo} from './entities/photo.entity'

await cleanup()

await AppDataSource.initialize()

console.log('Database initialized\n')

const albumRepository = AppDataSource.getRepository(Album)
const photoRepository = AppDataSource.getRepository(Photo)

// create a few albums
const album1 = new Album()
album1.name = 'Bears'
await albumRepository.save(album1)

const album2 = new Album()
album2.name = 'Me'
await albumRepository.save(album2)

// create a photo
const photo = new Photo()
photo.name = 'Me and Bears'
photo.description = 'I am near polar bears'
photo.filename = 'photo-with-bears.jpg'
photo.views = 1
photo.isPublished = true
photo.albums = [album1, album2]

// create a photo metadata
const metadata = new PhotoMetadata()
metadata.height = 640
metadata.width = 480
metadata.compressed = true
metadata.comment = 'cybershoot'
metadata.orientation = 'portrait'
metadata.photo = photo // this way we connect them

// connect photo with metadata
photo.metadata = metadata

// saving a photo also save the metadata
await photoRepository.save(photo)

const photos = await photoRepository.findOne({
  where: {
    id: 1,
  },
  relations: {
    metadata: true,
    albums: true,
  },
})

console.log('All photos with metadata:')
console.log(photos)

/**
 * Just for testing purposes
 */
async function cleanup() {
  await AppDataSource.initialize()
  await AppDataSource.dropDatabase()
  await AppDataSource.destroy()
}
