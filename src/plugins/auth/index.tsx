import { Elysia } from 'elysia'
import { AuthApiPlugin } from './api'
import { AuthRoutesPlugin } from './routes'

const AuthPlugin = (app: Elysia) =>
  app
    .use(AuthApiPlugin)
    .use(AuthRoutesPlugin)

export { AuthPlugin }