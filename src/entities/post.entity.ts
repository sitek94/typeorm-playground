import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm'
import {Content} from './content.entity'
import {Category} from './category.entity'

@Entity()
export class Post extends Content {
  @Column()
  viewCount: number

  @Column()
  categoryId: number

  @ManyToOne(() => Category)
  @JoinColumn({name: 'categoryId'})
  category: Category
}
