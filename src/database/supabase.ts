// src/libs/supabase.ts
import { SupportedStorage, createClient } from '@supabase/supabase-js'
import { Cookie } from 'elysia'
const { SUPABASE_URL, SUPABASE_KEY } = process.env

let clients: any = {}

export const useSupabaseClient = async (schema: string, cookie?: Record<string, string>) => {
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

  if (cookie) {
    const loggedIn = cookie['logged-in'] === 'true'
    if (loggedIn) {
      console.log('setting session')
      const accessToken: string = cookie['sb-access-token']
      const refreshToken = cookie['sb-refresh-token']
      await client.auth.setSession({
        refresh_token: refreshToken,
        access_token: accessToken,
      })
    }
  }

  return client
}
