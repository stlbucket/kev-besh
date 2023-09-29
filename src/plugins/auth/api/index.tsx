import { Elysia} from 'elysia'

import { SignInOtpPlugin } from './sign-in-otp'
import { ConfirmPlugin } from './confirm'
import { SignOutPlugin } from './sign-out'
import { UserPlugin } from './user'

const AuthApiPlugin = (app: Elysia) =>
  app.group('/auth/api', (app) =>
    app
      .use(SignInOtpPlugin)
      .use(ConfirmPlugin)
      .use(SignOutPlugin)
      .use(UserPlugin)
    )

export { AuthApiPlugin }



      // THESE ARE LEFT HERE COZ WE MAY WANT TO IMPLEMENT THEM LATER - HAVE TO ADD UI STUFF FOR THAT
      // TO DO THIS, JUST CREATE MORE PLUGINS LIKE THE ABOVE ONES
      // .post(
      //   '/sign-up',
      //   async (context) => {
      //     const { data, error } = await (await useSupabaseClient('auth', context)).auth.signUp(context.body) 
      //     if (error) return error 
      //     return data.user 
      //   },
      //   {
      //     body: 'signInWithPassword'
      //   }
      // )
      // .post(
      //   '/sign-in',
      //   async (context) => {
      //     const { data, error } = await (await useSupabaseClient('auth', context)).auth.signInWithPassword(context.body)
      //     if (error) return error 
      //     return data.user 
      //   },
      //   {
      //     body: 'signInWithPassword'
      //   }
      // )
