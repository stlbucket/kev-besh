import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'

const Home = (app: Elysia) => {
  return app
  .get("/", async ({ html }) => {
    const content = <div class="flex grow h-screen justify-center items-center bg-blue-300 text-4xl">BESH</div>
    return Page({html, content})
  })
}

export { Home }

