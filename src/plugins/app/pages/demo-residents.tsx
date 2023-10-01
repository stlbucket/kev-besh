import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'
import {DemoResidentList} from '../components/DemoResidents'

const DemoResidents = (app: Elysia) => {
  return app
    .get("/demo-app-residents", async (context) => {
      const {data , error} = await query.demoResidents()
      const html = context.html
      const content = <DemoResidentList residents={data} allow-assume="true" />;
      return await Page({html, content, context})
    })
  }
export { DemoResidents }

