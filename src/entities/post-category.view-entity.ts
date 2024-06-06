import {sql} from '@/utils/sql'
import {ViewColumn, ViewEntity} from 'typeorm'

@ViewEntity({
  expression: sql`
    SELECT "post"."id" AS "id", "post"."title" AS "title", "category"."name" AS "categoryName"
    FROM "post" "post"
    LEFT JOIN "category" "category" ON "post"."categoryId" = "category"."id"
  `,
})
export class PostPreview {
  @ViewColumn()
  id: number

  @ViewColumn()
  title: string

  @ViewColumn()
  categoryName: string
}
