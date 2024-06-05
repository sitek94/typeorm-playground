import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  type Relation,
  ManyToOne,
} from 'typeorm'
import {PhotoMetadata} from './photo-metadata.entity'
import {Author} from './author.entity'

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

  @OneToOne(() => PhotoMetadata, photoMetadata => photoMetadata.photo, {
    cascade: true,
  })
  metadata: Relation<PhotoMetadata>

  @ManyToOne(() => Author, author => author.photos)
  author: Relation<Author>
}
