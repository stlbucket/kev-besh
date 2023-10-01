import { Elysia } from 'elysia'
import { AppPagesPlugin } from './pages'
import { AppApiPlugin } from './api'
import { useSupabaseClient } from '../../supabase'

const AppPlugin = (app: Elysia) =>
  app
    .use(AppPagesPlugin)
    .use(AppApiPlugin)

export { AppPlugin }