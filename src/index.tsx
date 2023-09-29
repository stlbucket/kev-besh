import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import * as routes from './routes'

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(routes.HomeRoute)
  .use(routes.Auth)
  .use(routes.App.DemoResidentsRoute)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/supabase-auth.js", () => Bun.file("./public/supabase-auth.js"))
  // .get("/auth/confirm", () => Bun.file("./public/confirm.html"))
  .listen(3000)

  console.log(
    `🦊 Elysia is running at ${app.server?.protocol}://${app.server?.hostname}:${app.server?.port}`
  );
  