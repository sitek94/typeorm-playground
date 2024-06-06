import {Category} from '@/entities/category.entity'
import {PostPreview} from '@/entities/post-category.view-entity'
import {Post} from '@/entities/post.entity'
import {run} from '@/utils/run'

run(async dataSource => {
  const category1 = new Category()
  category1.name = 'Cars'
  category1.description = 'Wheeled motor vehicles used for transportation.'
  await dataSource.manager.save(category1)

  const category2 = new Category()
  category2.name = 'Airplanes'
  category2.description = 'Powered flying vehicles with fixed wings.'
  await dataSource.manager.save(category2)

  const post1 = new Post()
  post1.title = 'About BMW'
  post1.description =
    'BMW is a German multinational company which produces luxury vehicles and motorcycles.'
  post1.categoryId = category1.id
  post1.viewCount = 100
  await dataSource.manager.save(post1)

  const post2 = new Post()
  post2.title = 'About Boeing'
  post2.description =
    'The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and telecommunications equipment.'
  post2.categoryId = category2.id
  post2.viewCount = 200
  await dataSource.manager.save(post2)

  const postPreviews = await dataSource.manager.find(PostPreview)

  console.log(postPreviews)

  const postPreview = await dataSource.manager.findOneBy(PostPreview, {
    id: 1,
  })

  console.log(postPreview)
})
