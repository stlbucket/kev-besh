import { Elysia } from 'elysia'
import { AuthApiPlugin } from './api'
import { AuthPagesPlugin } from './pages'

const AuthPlugin = (app: Elysia) =>
  app
    .use(AuthApiPlugin)
    .use(AuthPagesPlugin)

export { AuthPlugin }