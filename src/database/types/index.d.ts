import * as app from './db.app'
import * as app_api from './db.app_api'

import * as loc from './db.loc'
import * as loc_api from './db.loc_api'

import * as msg from './db.msg'
import * as msg_api from './db.msg_api'

import * as todo from './db.todo'
import * as todo_api from './db.todo_api'

export * from app
export * from app_api

export * from loc
export * from loc_api

export * from msg
export * from msg_api

export * from todo
export * from todo_api

interface AppApi {
  demoResidents: app_api.Database.demo_profile_residencies
}

export interface Database {
  profile: app.Database.profile
  resident: app.Database.resident
}
