import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'

const LicensePacks = (app: Elysia) => {
  return app
    .get("/license-packs", async (context) => {
      const licensePacks = await query.licensePacks()
      const html = context.html
      const content = <pre>{JSON.stringify(licensePacks, null, 2)}</pre>
      return await Page({html, content, context})
    })
  }
export { LicensePacks }

