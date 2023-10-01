import { Elysia, t } from "elysia";
import { cookie } from '@elysiajs/cookie'
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'

// THESE PLUGINS WILL ROUGHLY CORRELATE TO DATABASE SCHEMAS
// MSG, LOC, TODO - THESE AND OTHERS WILL BE ADDED LATER
import { AuthPlugin } from './plugins/auth'
import { AppPlugin } from "./plugins/app"
import { useSupabaseClient } from "./supabase";

const app = new Elysia()
  .use(html())
  .use(swagger())
  .use(cookie({
    httpOnly: true
  }))
  .use(staticPlugin())
  .onError((error) => {
    console.log('Error', error.code, error.code === 'NOT_FOUND')
    if (error.code === 'NOT_FOUND')
      return 'no soup for u'
    //   return new Response('This page has not yet been implemented :(', {
    //       status: 404
    // })
  })
  .on('beforeHandle', async (context: any) => {
    // THIS ENSURES THAT WE ARE ALWAYS USING THE LATEST CREDENTIALS
    // MAINLY THIS IS FOR WHEN WE ASSUME A NEW RESIDENCY
    const client = await useSupabaseClient('public', context)
    const user = await client.auth.getUser()
    context.store.user = user
  })
  // .decorate('getDate', () => Date.now())
  // .derive((context: any) => {
  //   return {
  //     user: 'tacos'
  //   }
  //   // console.log('user', user)
  //   // context.store.user = user
  // })
  .derive(async (context: any) => {
    const client = await useSupabaseClient('public', context)
    const {data, error} = await client.auth.getUser()
    return {
      leUser: data.user
    }
    // console.log('user', user)
    // context.store.user = user
  })
  .use(AuthPlugin)
  .use(AppPlugin)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/favicon.ico", () => Bun.file("./public/favicon.ico"))  // I DON'T THINK THIS IS WORKING CORRECTLY - PROLLY COZ DON'T KNOW HOW TO MAKE ICO FILE
  .listen(4000)

  console.log(
    `🦊 Elysia is running at ${app.server?.protocol}://${app.server?.hostname}:${app.server?.port}`
  );
