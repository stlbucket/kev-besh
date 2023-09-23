import {db} from '../..'

export const demoResidents = async () => {
  const result = await db
  .selectFrom('app.resident')
  .selectAll()
  .execute()

  return result
}
