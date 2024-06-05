import 'reflect-metadata'
import {DataSource} from 'typeorm'
import {User} from './entities/user.entity'
import {Photo} from './entities/photo.entity'
import {PhotoMetadata} from './entities/photo-metadata.entity'
import {Author} from './entities/author.entity'
import {Album} from './entities/album.entity'
import {Environment} from './entities/environment.entity'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/database.sqlite3',
  synchronize: true,
  logging: false,
  entities: [Album, Author, Environment, Photo, PhotoMetadata, User],
  migrations: [],
  subscribers: [],
})
