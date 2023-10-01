import { Elysia } from 'elysia'
import { AuthApiPlugin } from './api'
import { AuthPagesPlugin } from './pages'
import { useSupabaseClient } from '../../supabase'
// import { AuthFragmentsPlugin } from './fragments'

const AuthPlugin = (app: Elysia) =>
  app
  // .decorate('authorizationClient', async (context: any) => {
  //   return await useSupabaseClient('authorization', context)
  // })
  .use(AuthApiPlugin)
    // .use(AuthFragmentsPlugin)
    .use(AuthPagesPlugin)

export { AuthPlugin }