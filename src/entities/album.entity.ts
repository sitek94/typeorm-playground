import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  type Relation,
} from 'typeorm'
import {Photo} from './photo.entity'

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Photo, photo => photo.albums)
  @JoinTable()
  photos: Relation<Photo[]>
}
