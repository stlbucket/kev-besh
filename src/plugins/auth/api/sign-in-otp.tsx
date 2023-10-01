import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../../supabase'
import { authModel } from '../model'

const SignInOtpPlugin = (app: Elysia) =>
  app
    .use(authModel)
    .post(
      '/sign-in-otp',
      async (context) => {
        const { data, error } = await (await useSupabaseClient('authorization', context)).auth.signInWithOtp({
          email: context.body.email,
          options: {
            emailRedirectTo: `${context.headers.origin}/auth/api/confirm`,
          }            
        }) 
        if (error) return error 
        return '<a href="http://localhost:54324/monitor">in-bucket</a>'
      },
      {
        body: 'signInWithOtp'
      }
    )

export { SignInOtpPlugin }