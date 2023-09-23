import * as app from './db.app'
import * as loc from './db.loc'
import * as msg from './db.msg'
import * as todo from './db.todo'

export * from app
export * from loc
export * from msg
export * from todo



export interface Database {
  'app.profile': AppProfile
  'app.resident': app.AppResident,
}
