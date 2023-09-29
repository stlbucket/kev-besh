import { Elysia } from 'elysia'
import * as elements from "typed-html";
import {query} from '../database'
import {ResidentList} from '../components/resident'

const DemoResidents = (app: Elysia) =>
    app
    .state('plugin-version', 1)
    .get('/demo-app-residents', async () => {
      const {data , error} = await query.demoResidents()
      return <ResidentList residents={data} />;
    })


export { DemoResidents }

