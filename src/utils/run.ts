import {AppDataSource} from '../data-source'

/**
 * Used for running some code in a clean environment, e.g. to run examples.
 */
export async function run(
  callback: (dataSource: typeof AppDataSource) => Promise<void>,
) {
  await AppDataSource.initialize()
  await AppDataSource.dropDatabase()
  await AppDataSource.destroy()

  await AppDataSource.initialize()

  await callback(AppDataSource)
}
