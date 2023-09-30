import { Elysia} from 'elysia'

import { MyProfile } from './my-profile'

const AuthPagesPlugin = (app: Elysia) => {  
  return app
    .group('/auth', (app) => {
      return app
        .use(MyProfile)
    }
  )
}

export { AuthPagesPlugin }
