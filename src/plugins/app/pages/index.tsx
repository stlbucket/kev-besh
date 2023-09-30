import { Elysia} from 'elysia'

import { Home } from './home'
import { DemoResidents } from './demo-residents'
const AppPagesPlugin = (app: Elysia) => {  
  return app
    .use(Home)  // this one will be at the root of the app
    .group('/app', (app) =>
      app
        .use(DemoResidents) // this one will be at /app/demo-residents
      )
}

export { AppPagesPlugin }
