import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../../supabase'
import { authModel } from '../model'

const SignOutPlugin = (app: Elysia) =>
  app
    .use(authModel)
    .post(
      '/sign-out',
      async (context) => {
        const client = await useSupabaseClient('auth', context)
        await client.auth.signOut()
        context.setCookie('logged-in', 'false')
        context.set.redirect = '/'          
      }
    )

export { SignOutPlugin }