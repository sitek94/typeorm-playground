import {Column, Entity} from 'typeorm'
import {Content} from './content.entity'

@Entity()
export class Question extends Content {
  @Column()
  answersCount: number
}
