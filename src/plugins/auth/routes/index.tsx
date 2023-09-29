import { Elysia} from 'elysia'

import { MyProfilePlugin } from './my-profile'

const AuthRoutesPlugin = (app: Elysia) =>
  app.group('/auth', (app) =>
    app
      .use(MyProfilePlugin)
    )

export { AuthRoutesPlugin }
