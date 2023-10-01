import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../../supabase'
import { Page } from '../../../_common/Page'
import { User } from '../components/User'

const MyProfile = (app: Elysia) => {
  return app
  .get( 
    '/my-profile', 
      async (context) => { 
        const client = (await useSupabaseClient('auth', context))

        try {
          const session = await client.auth.getSession()
          const content = User(session.data.session.user)
          return await Page({context.html, content, context})
        } catch (e) {
          console.log('GET USER ERROR', e)
          return 'no user'
        }
      }
    ) 
}
export { MyProfile }

