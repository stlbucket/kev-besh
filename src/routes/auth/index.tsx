// src/modules/authen.ts
import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../database/supabase' 
import { authModel } from './auth-model'
import { cookie } from '@elysiajs/cookie'

const auth = (app: Elysia) =>
  app.group('/auth', (app) =>
    app
      .use(authModel)
      .use(cookie({
        httpOnly: true
      }))
      .post(
        '/sign-up',
        async ({ body }) => {
          const { data, error } = await useSupabaseClient('auth').auth.signUp(body) 
          if (error) return error 
          return data.user 
        },
        {
          body: 'signInWithPassword'
        }
      )
      .post(
        '/sign-in',
        async ({ body }) => {
          const { data, error } = await useSupabaseClient('auth').auth.signInWithPassword(body) 
          if (error) return error 
          return data.user 
        },
        {
          body: 'signInWithPassword'
        }
      )
      .post(
        '/sign-in-otp',
        async ({ body }) => {
          const { data, error } = await useSupabaseClient('auth').auth.signInWithOtp(body) 
          if (error) return error 
          return data.user 
        },
        {
          body: 'signInWithOtp'
        }
      )
      .post(
        '/login',
        async ({ body }) => {
          return body.email
        },
        {
          body: 'signInWithOtp'
        }
      )
      .get( 
        '/refresh', 
        async ({ setCookie, cookie: { refresh_token } }) => { 
          const { data, error } = await useSupabaseClient('auth').auth.refreshSession({ 
            refresh_token 
          }) 
          if (error) return error 
          setCookie('refresh_token', data.session!.refresh_token) 
          return data.user 
        } 
    ) 
  )

export { auth }