import 'reflect-metadata'
import {DataSource} from 'typeorm'
import {User} from './entities/user.entity'
import {Photo} from './entities/photo.entity'
import {PhotoMetadata} from './entities/photo-metadata.entity'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/database.sqlite3',
  synchronize: true,
  logging: true,
  entities: [User, Photo, PhotoMetadata],
  migrations: [],
  subscribers: [],
})
