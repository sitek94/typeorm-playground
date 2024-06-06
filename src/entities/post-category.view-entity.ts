import {ViewColumn, ViewEntity} from 'typeorm'
import {Category} from './category.entity'
import {Post} from './post.entity'

@ViewEntity({
  expression: dataSource =>
    dataSource
      .createQueryBuilder()
      .select('post.id', 'id')
      .addSelect('post.title', 'title')
      .addSelect('category.name', 'categoryName')
      .from(Post, 'post')
      .leftJoin(Category, 'category', 'category.id = post.categoryId'),
})
export class PostPreview {
  @ViewColumn()
  id: number

  @ViewColumn()
  title: string

  @ViewColumn()
  categoryName: string
}
