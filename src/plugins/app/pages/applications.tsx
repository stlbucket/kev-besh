import { Elysia, t } from 'elysia'
import * as elements from "typed-html";
import { Page } from '../../../_common/Page'
import {query} from '../database'
import { ApplicationList } from '../components/application';

const Applications = (app: Elysia) => {
  return app
    .get("/applications", async ({ html }) => {
      const applications = await query.applications()
      const content = <pre>{JSON.stringify(applications, null, 2)}</pre>
      // const content = <ApplicationList applications={applications} />;
      return Page({html, content})
    })
  }
export { Applications }

