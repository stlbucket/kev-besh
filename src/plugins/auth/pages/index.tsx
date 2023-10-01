import { Elysia} from 'elysia'

// this is actually under app now - but left here for reasons

// import { MyProfile } from './my-profile'

const AuthPagesPlugin = (app: Elysia) => {  
  return app
    .group('/auth', (app) => {
      return app
        // .use(MyProfile)
    }
  )
}

export { AuthPagesPlugin }
