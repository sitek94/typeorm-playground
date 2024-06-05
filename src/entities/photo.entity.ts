import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import {PhotoMetadata} from './photo-metadata.entity'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  name: string

  @Column('text')
  description: string

  @Column()
  filename: string

  @Column('double')
  views: number

  @Column()
  isPublished: boolean

  @OneToOne(() => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata: PhotoMetadata
}
