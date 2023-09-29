import { Elysia} from 'elysia'

import { HomeRoute } from './home'
import { DemoResidentsRoute } from './demoResidents'

const AppRoutesPlugin = (app: Elysia) => {  
  return app
    .use(HomeRoute)  // this one will be at the root of the app
    .group('/app', (app) =>
      app
      .use(DemoResidentsRoute)
      )
}

export { AppRoutesPlugin }
