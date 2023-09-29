import { Elysia, t } from 'elysia'
import { Page } from '../../../_common/Page'

const HomeRoute = new Elysia()
    .state('plugin-version', 1)
    .get("/", ({ html }) => {
      const path = '/app/demo-app-residents'
      return Page({html, path})
    })

export { HomeRoute }

