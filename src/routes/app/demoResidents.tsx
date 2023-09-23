import { Elysia } from 'elysia'
import {query} from '../../database'

const DemoResidentsRoute = (app: Elysia) =>
    app
    .state('plugin-version', 1)
    .get('/demo-app-residents', async () => {
      const result = await query.app.demoResidents()

      return result
    })


export { DemoResidentsRoute }