import { Elysia } from 'elysia'
// import { AppApiPlugin } from './api'
import { AppFragmentsPlugin } from './fragments'
import { AppPagesPlugin } from './pages'

const AppPlugin = (app: Elysia) =>
  app
    // .use(AppApiPlugin)
    .use(AppFragmentsPlugin)
    .use(AppPagesPlugin)

export { AppPlugin }