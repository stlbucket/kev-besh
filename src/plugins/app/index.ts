import { Elysia } from 'elysia'
// import { AppApiPlugin } from './api'
import { AppRoutesPlugin } from './routes'

const AppPlugin = (app: Elysia) =>
  app
    // .use(AppApiPlugin)
    .use(AppRoutesPlugin)

export { AppPlugin }