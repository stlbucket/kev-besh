import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { useSupabaseClient } from '../../../supabase'
import { Page } from '../../../_common/Page'
import { User } from '../components/User'
import { myProfileResidencies } from '../database/query'
import { MyResidentList } from '../components/MyResidents';

const MyProfile = (app: Elysia) => {
  return app
  .get( 
    '/my-profile', 
      async (context) => { 
        try {
          const client = (await useSupabaseClient('auth', context))
          const session = await client.auth.getSession()
          const user = session?.data?.session?.user          
          
          const userDisplay = User(user || 'no user')
          const residencies = await myProfileResidencies(context)
          const content = <div class="flex flex-col gap-10">
            {MyResidentList({residents: residencies.data})}
            {userDisplay}
          </div>

          return await Page({html: context.html, content, context})
        } catch (e) {
          console.log('GET USER ERROR', e)
          return 'no user'
        }
      }
    ) 
}
export { MyProfile }

