import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'
import {ResidentList} from '../components/resident'

const DemoResidents = (app: Elysia) => {
  return app
    .get("/demo-app-residents", async ({ html }) => {
      const {data , error} = await query.demoResidents()
      const content = <ResidentList residents={data} />;
      return Page({html, content})
    })
  }
export { DemoResidents }

