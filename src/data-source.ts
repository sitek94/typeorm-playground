import 'reflect-metadata'
import {DataSource} from 'typeorm'
import {User} from './entities/user.entity'
import {Photo} from './entities/photo.entity'
import {PhotoMetadata} from './entities/photo-metadata.entity'
import {Author} from './entities/author.entity'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/database.sqlite3',
  synchronize: true,
  logging: false,
  entities: [Author, User, Photo, PhotoMetadata],
  migrations: [],
  subscribers: [],
})
