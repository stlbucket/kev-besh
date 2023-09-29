import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../../supabase'
import { authModel } from '../model'

const ConfirmPlugin = (app: Elysia) =>
  app
    .use(authModel)
    .get(
      '/confirm',
      async (context: Context) => {
        const code = context.query.code
        if (!code) {
          context.set.redirect = '/'
        } else {
          const client = await useSupabaseClient('auth', context)
          const { data, error } = await client.auth.exchangeCodeForSession(code)
          await client.auth.setSession({
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            auth: {
              persistSession: false
            }
          })
          await client.auth.getUser()
          context.setCookie('sb-access-token', data.session.access_token)
          context.setCookie('sb-refresh-token', data.session.refresh_token)
          context.setCookie('logged-in', 'true')

          context.set.redirect = '/'
        }
      }
    )

export { ConfirmPlugin }