import { Elysia, t } from 'elysia'
import { useSupabaseClient } from '../../database/supabase' 
import { authModel } from './auth-model'
import { cookie } from '@elysiajs/cookie'
import { User } from './components/User'
import { Page } from '../app/components/_common/Page'
import { LogoutPage } from './components/LogoutPage'
import { Cookie } from 'elysia'

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
          const { data, error } = await (await useSupabaseClient('auth')).auth.signUp(body) 
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
          const { data, error } = await (await useSupabaseClient('auth')).auth.signInWithPassword(body)
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
          console.log('headers', headers)
          const { data, error } = await (await useSupabaseClient('auth')).auth.signInWithOtp({
            email: body.email,
            options: {
              emailRedirectTo: `${headers.origin}/auth/confirm`,
            }            
          }) 
          if (error) return error 
          return '<a href="http://localhost:54324/monitor">in-bucket</a>'
        },
        {
          body: 'signInWithOtp'
        }
      )
      .get(
        '/confirm',
        async ({ set, query, headers, cookie, setCookie }) => {
          const code = query.code
          if (!code) {
            set.redirect = '/'
          } else {
            const client = await useSupabaseClient('auth')
            const { data, error } = await client.auth.exchangeCodeForSession(code)
            await client.auth.setSession({
              access_token: data.session.access_token,
              refresh_token: data.session.refresh_token,
              auth: {
                persistSession: false
              }
            })
            await client.auth.getUser()
            setCookie('sb-access-token', data.session.access_token)
            setCookie('sb-refresh-token', data.session.refresh_token)
            setCookie('logged-in', 'true')

            set.redirect = '/'
          }
        }
      )
      .post(
        '/sign-out',
        async ({ set, cookie, setCookie }) => {
          const client = await useSupabaseClient('auth', cookie)
          await client.auth.signOut()
          setCookie('logged-in', 'false')
          set.redirect = '/'          
        }
      )
      .get( 
        '/refresh', 
        async ({ setCookie, cookie: { refresh_token } }) => { 
          const { data, error } = await (await useSupabaseClient('auth')).auth.refreshSession({ 
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
          const client = (await useSupabaseClient('auth', cookie))

          try {
            const session = await client.auth.getSession()
            return User(session)  
          } catch (e) {
            console.log('GET USER ERROR', e)
            return 'no user'
          }
        }
      ) 
      .get( 
        '/my-profile', 
        async ({ html }) => { 
          return Page({html, path: '/auth/user'})
        }
      )
      // .post(
      //   '/sign-out',
      //   async ({ set, cookie, removeCookie }) => {
      //     // const accessToken = cookie['sb-access-token']
      //     // const refreshToken = cookie['sb-refresh-token']
      //     // cookie['sb-access-token'].remove()
      //     // cookie['sb-refresh-token'].remove()
      //     // removeCookie('sb-access-token')
      //     // removeCookie('sb-refresh-token')
      //     delete cookie['sb-access-token']
      //     delete cookie['sb-refresh-token']
          
      //     set.redirect = '/'
      //   }
      // )
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
