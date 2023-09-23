// src/libs/supabase.ts
import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL, SUPABASE_KEY } = process.env

export const useSupabaseClient = (schema: string) => {
  return createClient(SUPABASE_URL!, SUPABASE_KEY!, {
    db: {
      schema: schema,
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      // headers: { 'x-my-custom-header': 'my-app-name' },
    },
  })
}