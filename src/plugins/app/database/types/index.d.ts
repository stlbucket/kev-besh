import * as app from './db.app'
import * as app_api from './db.app_api'

export * from app
export * from app_api

export type Resident = app.app.Database.resident
export type Application = app.app.Database.application
