import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as routes from './routes'

const app = new Elysia()
  .use(html())
  .use(routes.Auth)
  .use(routes.HomeRoute)
  .use(routes.App.DemoResidentsRoute)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000)

  console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );
  