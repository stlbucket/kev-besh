import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import { useSupabaseClient } from '../../../supabase';

const Home = (app: Elysia) => {
  return app
  .get("/", async (context) => {
    const html = context.html
    const content = <div class="flex grow h-screen justify-center items-center bg-blue-300 text-4xl">BESH</div>
    return await Page({html, content, context})
  })
}

export { Home }

