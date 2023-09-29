import { Elysia} from 'elysia'

import { HomeRoute } from './home'

const AppPagesPlugin = (app: Elysia) => {  
  return app
    .use(HomeRoute)  // this one will be at the root of the app
    // .group('/app', (app) =>
    //   app
    //     .use(OTHER PAGES HERE)
    //   )
}

export { AppPagesPlugin }
