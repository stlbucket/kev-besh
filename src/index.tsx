import { Elysia, t } from "elysia";
import { cookie } from '@elysiajs/cookie'
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'

// THESE PLUGINS WILL ROUGHLY CORRELATE TO DATABASE SCHEMAS
// MSG, LOC, TODO - THESE AND OTHERS WILL BE ADDED LATER
import { AuthPlugin } from './plugins/auth'
import { AppPlugin } from "./plugins/app"

const app = new Elysia()
  .use(html())
  .use(cookie({
    httpOnly: true
  }))
  .use(staticPlugin())
  .use(AuthPlugin)
  .use(AppPlugin)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/favicon.ico", () => Bun.file("./public/favicon.ico"))  // i don't think this is working correctly
  .listen(3000)

  console.log(
    `🦊 Elysia is running at ${app.server?.protocol}://${app.server?.hostname}:${app.server?.port}`
  );
  