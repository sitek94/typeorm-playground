import {Category} from '@/entities/category.entity'
import {run} from '@/utils/run'

run(async dataSource => {
  const categoryRepository = dataSource.getRepository(Category)

  const electronics = new Category()
  electronics.name = 'Electronics'
  electronics.description = 'Electronic gadgets and devices'
  await categoryRepository.save(electronics)

  const computers = new Category()
  computers.name = 'Computers'
  computers.description = 'Desktops and laptops'
  computers.parent = electronics
  await categoryRepository.save(computers)

  const laptops = new Category()
  laptops.name = 'Laptops'
  laptops.description = 'Portable computers'
  laptops.parent = computers
  await categoryRepository.save(laptops)

  const desktops = new Category()
  desktops.name = 'Desktops'
  desktops.description = 'Stationary computers'
  desktops.parent = computers
  await categoryRepository.save(desktops)

  const mobilePhones = new Category()
  mobilePhones.name = 'Mobile Phones'
  mobilePhones.description = 'Smartphones and feature phones'
  mobilePhones.parent = electronics
  await categoryRepository.save(mobilePhones)

  const smartphones = new Category()
  smartphones.name = 'Smartphones'
  smartphones.description = 'Advanced mobile phones'
  smartphones.parent = mobilePhones
  await categoryRepository.save(smartphones)

  const featurePhones = new Category()
  featurePhones.name = 'Feature Phones'
  featurePhones.description = 'Basic mobile phones'
  featurePhones.parent = mobilePhones
  await categoryRepository.save(featurePhones)

  // Similarly, create Home Appliances category and its children
  const homeAppliances = new Category()
  homeAppliances.name = 'Home Appliances'
  homeAppliances.description = 'Appliances for home use'
  await categoryRepository.save(homeAppliances)

  const kitchenAppliances = new Category()
  kitchenAppliances.name = 'Kitchen Appliances'
  kitchenAppliances.description = 'Appliances for the kitchen'
  kitchenAppliances.parent = homeAppliances
  await categoryRepository.save(kitchenAppliances)

  const refrigerators = new Category()
  refrigerators.name = 'Refrigerators'
  refrigerators.description = 'Cooling appliances'
  refrigerators.parent = kitchenAppliances
  await categoryRepository.save(refrigerators)

  const microwaves = new Category()
  microwaves.name = 'Microwaves'
  microwaves.description = 'Cooking appliances'
  microwaves.parent = kitchenAppliances
  await categoryRepository.save(microwaves)

  const laundryAppliances = new Category()
  laundryAppliances.name = 'Laundry Appliances'
  laundryAppliances.description = 'Washing and drying appliances'
  laundryAppliances.parent = homeAppliances
  await categoryRepository.save(laundryAppliances)

  const washingMachines = new Category()
  washingMachines.name = 'Washing Machines'
  washingMachines.description = 'Laundry washing appliances'
  washingMachines.parent = laundryAppliances
  await categoryRepository.save(washingMachines)

  const dryers = new Category()
  dryers.name = 'Dryers'
  dryers.description = 'Laundry drying appliances'
  dryers.parent = laundryAppliances
  await categoryRepository.save(dryers)

  const electronicsCategory = await categoryRepository.findOne({
    where: {name: 'Electronics'},
    relations: ['children'],
  })

  console.log(electronicsCategory)
  console.log(electronicsCategory?.children) // Should list Computers and Mobile Phones
})
