import { Elysia} from 'elysia'

import { Home } from './home'
import { DemoResidents } from './demo-residents'
import { Applications } from './applications'
import { LicensePacks } from './license-packs'
const AppPagesPlugin = (app: Elysia) => {  
  return app
    .use(Home)  // this one will be at the root of the app
    .group('/app', (app) =>
      app
        .use(DemoResidents)
        .use(Applications)
        .use(LicensePacks)
      )
}

export { AppPagesPlugin }
