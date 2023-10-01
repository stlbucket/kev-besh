import { Elysia } from 'elysia'
import { AppPagesPlugin } from './pages'
import { AppApiPlugin } from './api'
import { AppFragmentsPlugin } from './fragments'

const AppPlugin = (app: Elysia) =>
  app
    .use(AppPagesPlugin)
    .use(AppApiPlugin)
    .use(AppFragmentsPlugin)

export { AppPlugin }