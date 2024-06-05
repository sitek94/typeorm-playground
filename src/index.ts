import {AppDataSource} from './data-source'
import {PhotoMetadata} from './entities/photo-metadata.entity'
import {Photo} from './entities/photo.entity'

AppDataSource.initialize()
  .then(async () => {
    console.log('Database initialized\n')

    // create a photo
    const photo = new Photo()
    photo.name = 'Me and Bears'
    photo.description = 'I am near polar bears'
    photo.filename = 'photo-with-bears.jpg'
    photo.views = 1
    photo.isPublished = true

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

    // get repository
    const photoRepository = AppDataSource.getRepository(Photo)

    // saving a photo also save the metadata
    await photoRepository.save(photo)

    const photos = await photoRepository.find({
      relations: {
        metadata: true,
      },
    })

    console.log('All photos with metadata:')
    console.log(photos)
  })
  .then(() => {
    // Clean up DB for testing purposes
    AppDataSource.dropDatabase()
    console.log('\nDatabase dropped')
  })
  .catch(error => console.log(error))
