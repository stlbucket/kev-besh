import * as app from './db.app'
import * as app_api from './db.app_api'

export * from app
export * from app_api

type Resident = app.app.Database.resident

export {Resident}