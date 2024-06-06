import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {Name} from './name.entity'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number

  @Column(() => Name)
  name: Name

  @Column()
  salary: string
}
