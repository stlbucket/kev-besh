import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../database/supabase' 
import { authModel } from './auth-model'
import { cookie } from '@elysiajs/cookie'
import { User } from './components/User'
import { Page } from '../app/components/_common/Page'
import { LogoutPage } from './components/LogoutPage'

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
        async ({ body, headers, set }) => {
          const { data, error } = await useSupabaseClient('auth').auth.signInWithOtp({
            email: body.email,
            options: {
              emailRedirectTo: `${headers.referer}auth/confirm`,
            }            
          }) 
          if (error) return error 
          return data
        },
        {
          body: 'signInWithOtp'
        }
      )
      .get(
        '/sign-out',
        async ({ set, cookie }) => {
          return LogoutPage()
        }
      )
      .get(
        '/confirm',
        async ({ set, query, headers, cookie }) => {
          const accessToken = cookie['sb-access-token']
          set.redirect = '/'
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
      .get( 
        '/user', 
        async ({ cookie }) => { 
          const client = await useSupabaseClient('auth')
          const accessToken = cookie['sb-access-token']
          const refreshToken = cookie['sb-refresh-token']

          if (!accessToken || !refreshToken) {
            return 'no user'
          } else {
            const session = await client.auth.setSession({
              refresh_token: refreshToken,
              access_token: accessToken,
            })

            return User(session)
          }
        }
      ) 
      .get( 
        '/my-profile', 
        async ({ html }) => { 
          return Page({html, path: '/auth/user'})
        }
      ) 
  )

export { auth }


{/* <script setup lang="ts">
  if (process.server) {
    console.log(
      'ERROR: It is very important to make sure that the redirect route right after login works without any server-side rendering. This is because the server-side rendering will not have the user data available. This is why we need to redirect to a client-side route right after login. This is a limitation of Supabase. If you are using Nuxt, you can use the no-ssr component to make sure that the redirect route is not server-side rendered.',
    )
  }
  const user = useSupabaseUser()
  if (user.value) {
    await navigateTo('/user')
  }
</script>
<template>
  <div>Waiting for login...</div>
</template> */}


  // // check for authorized session
  // const { data } = await supabaseClient.auth.getSession()
  // if (data?.session?.user?.aud !== 'authenticated') {
  //   // create a session from cookies
  //   const accessToken = getCookie(event, `${cookieName}-access-token`)
  //   const refreshToken = getCookie(event, `${cookieName}-refresh-token`)

  //   if (!accessToken || !refreshToken) return supabaseClient

  //   // Set session from cookies
  //   await supabaseClient.auth.setSession({
  //     refresh_token: refreshToken,
  //     access_token: accessToken,
  //   })
  // }
