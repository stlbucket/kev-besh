import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'
import { ApplicationList } from '../components/Application';

const Applications = (app: Elysia) => {
  return app
    .get("/applications", async (context) => {
      const applications = await query.applications()
      const html = context.html
      const content = <pre>{JSON.stringify(applications, null, 2)}</pre>
      // const content = <ApplicationList applications={applications} />;
      return await Page({html, content, context})
    })
  }
export { Applications }

