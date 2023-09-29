import { Elysia} from 'elysia'

import { DemoResidents } from './demoResidents'

const AppFragmentsPlugin = (app: Elysia) => {  
  return app
    .group('/app', (app) =>
      app
      .use(DemoResidents)
    )
}

export { AppFragmentsPlugin }
