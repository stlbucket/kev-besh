import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../../supabase'
import { authModel } from './model'
import { User } from './../components/User'

const UserPlugin = (app: Elysia) =>
  app
    .use(authModel)
    .get( 
      '/user', 
      async (context) => { 
        const client = (await useSupabaseClient('auth', context))

        try {
          const session = await client.auth.getSession()
          return User(session)  
        } catch (e) {
          console.log('GET USER ERROR', e)
          return 'no user'
        }
      }
    ) 

export { UserPlugin }