import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {Name} from './name.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column(() => Name)
  name: Name

  @Column()
  age: number
}
