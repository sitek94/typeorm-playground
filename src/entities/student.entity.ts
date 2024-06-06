import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {Name} from './name.entity'

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number

  @Column(() => Name)
  name: Name

  @Column()
  faculty: string
}
