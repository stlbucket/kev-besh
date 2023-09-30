import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'

const LicensePacks = (app: Elysia) => {
  return app
    .get("/license-packs", async ({ html }) => {
      const licensePacks = await query.licensePacks()
      const content = <pre>{JSON.stringify(licensePacks, null, 2)}</pre>
      return Page({html, content})
    })
  }
export { LicensePacks }

