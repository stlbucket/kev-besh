import { Elysia} from 'elysia'

import { MyProfilePlugin } from './my-profile'

const AuthPagesPlugin = (app: Elysia) =>
  app.group('/auth', (app) =>
    app
      .use(MyProfilePlugin)
    )

export { AuthPagesPlugin }
