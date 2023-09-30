import { Elysia} from 'elysia'

import { LeftNav } from './left-nav'

const AppFragmentsPlugin = (app: Elysia) => {  
  return app
    .group('/app', (app) =>
      app
        .use(LeftNav) // this one will be at /app/demo-residents
      )
}

export { AppFragmentsPlugin }
