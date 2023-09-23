import {db} from '../..'
import { AppResident } from '../../types/db.app'

export const demoResidents = async (): Promise<AppResident[]> => {
  const result = await db
  .selectFrom('app.resident')
  .selectAll()
  .execute()

  return result
}
