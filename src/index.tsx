import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import * as routes from './routes'

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(routes.Auth)
  .use(routes.HomeRoute)
  .use(routes.App.DemoResidentsRoute)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/supabase-auth.js", () => Bun.file("./scripts/supabase-auth.js"))
  .listen(3000)

  console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );
  