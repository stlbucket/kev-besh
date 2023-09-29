import { Elysia, t } from 'elysia'
import { Page } from '../../../_common/Page'

const MyProfilePlugin = (app: Elysia) =>
  app
  .get( 
    '/my-profile', 
    async ({ html }) => { 
      return Page({html, path: '/auth/api/user'})
    }
  )
export { MyProfilePlugin }