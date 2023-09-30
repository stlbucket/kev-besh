// src/libs/supabase.ts
import { createClient } from '@supabase/supabase-js'
import { Context, Cookie } from 'elysia'
const { SUPABASE_URL, SUPABASE_KEY } = process.env

let clients: any = {}

// WOULD BE COOL TO FOLD THIS IN AS A PLUGIN
// FOR NOW EACH PACKAGE JUST INCLUDES THIS FILE
export const useSupabaseClient = async (schema: string, context?: Context) => {
  let client = clients[schema]
  
  if (!client) {
    client = createClient(SUPABASE_URL!, SUPABASE_KEY!, {
      db: {
        schema: schema,
      },
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
      },
      global: {
      },
    })
    clients[schema] = client
  }

  if (context) {
    const cookie: Record<string,Cookie<any>> = context.cookie
    const loggedIn = cookie['logged-in'] as unknown as string === 'true'
    if (loggedIn) {
      const accessToken: string = cookie['sb-access-token'] as unknown as string
      const refreshToken = cookie['sb-refresh-token'] as unknown as string
      await client.auth.setSession({
        refresh_token: refreshToken,
        access_token: accessToken,
      })
    }
  }

  return client
}
