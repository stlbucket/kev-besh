import { Elysia } from 'elysia'
import { AuthApiPlugin } from './api'
import { AuthPagesPlugin } from './pages'
// import { AuthFragmentsPlugin } from './fragments'

const AuthPlugin = (app: Elysia) =>
  app
    .use(AuthApiPlugin)
    // .use(AuthFragmentsPlugin)
    .use(AuthPagesPlugin)

export { AuthPlugin }