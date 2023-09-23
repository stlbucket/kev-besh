import { Elysia } from 'elysia'
import * as elements from "typed-html";
import {query} from '../../database'
import {ResidentList} from './components/resident'

const DemoResidentsRoute = (app: Elysia) =>
    app
    .state('plugin-version', 1)
    .get('/demo-app-residents', async () => {
      const {data , error} = await query.app.demoResidents()
      
      return <ResidentList Residents={data} />;
    })


export { DemoResidentsRoute }

