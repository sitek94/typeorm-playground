import {Entity, PrimaryColumn} from 'typeorm'

@Entity()
export class Environment {
  @PrimaryColumn()
  name: string

  @PrimaryColumn()
  version: string
}
