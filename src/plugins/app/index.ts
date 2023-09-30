import { Elysia } from 'elysia'
import { AppPagesPlugin } from './pages'

const AppPlugin = (app: Elysia) =>
  app
    .use(AppPagesPlugin)

export { AppPlugin }