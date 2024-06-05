import {AppDataSource} from './data-source'
import {PhotoMetadata} from './entities/photo-metadata.entity'
import {Photo} from './entities/photo.entity'

AppDataSource.initialize()
  .then(async () => {
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

    // get entity repositories
    const photoRepository = AppDataSource.getRepository(Photo)
    const metadataRepository = AppDataSource.getRepository(PhotoMetadata)

    // first we should save a photo
    await photoRepository.save(photo)

    // photo is saved. Now we need to save a photo metadata
    await metadataRepository.save(metadata)

    // done
    console.log(
      'Metadata is saved, and the relation between metadata and photo is created in the database too',
    )
  })
  .catch(error => console.log(error))
