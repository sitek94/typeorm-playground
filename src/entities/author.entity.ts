import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  type Relation,
} from 'typeorm'
import {Photo} from './photo.entity'

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Photo, photo => photo.author) // note: we will create author property in the Photo class below
  photos: Relation<Photo[]>
}
