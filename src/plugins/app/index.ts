import { Elysia } from 'elysia'
import { AppPagesPlugin } from './pages'
import { AppFragmentsPlugin } from './fragments'

const AppPlugin = (app: Elysia) =>
  app
    .use(AppPagesPlugin)
    .use(AppFragmentsPlugin)

export { AppPlugin }