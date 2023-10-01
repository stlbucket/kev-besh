const { SUPABASE_URL, SUPABASE_KEY } = process.env
import { createClient } from '@supabase/supabase-js'
import { Context, Cookie } from 'elysia'

// WE HAVE ONLY ONE AUTHORIZATION CLIENT BECAUSE REINSTANTIATING THE LOGIN CLIENT CAUSES PKCE TO FAIL
let authorizationClient: any = undefined

// WOULD BE COOL TO FOLD THIS IN AS A PLUGIN
// FOR NOW EACH PACKAGE JUST INCLUDES THIS FILE
export const useSupabaseClient = async (schema: string, context?: Context) => {
  let client: any = undefined

  if (schema === 'authorization') {
    // THIS IS BECAUSE REINSTANTIATING THE LOGIN CLIENT CAUSES PKCE TO FAIL
    client = await getAuthorizationClient()
  } else {
    // ALL OTHER TIMES WE WANT A CLIENT JUST FOR THIS REQUEST
    client = await getSchemaClient(schema)
  }

  if (context) {
    // IF THE USER IS LOGGED IN, SET THE SESSION
    client = await setClientSession(client, context)
  }

  return client
}

const setClientSession = async (client: any, context: Context) => {
  const cookie: Record<string,Cookie<any>> = context.cookie
  const loggedIn = cookie && cookie['logged-in'] && cookie['logged-in'] as unknown as string === 'true'

  if (loggedIn) {
    const accessToken: string = cookie['sb-access-token'] as unknown as string
    const refreshToken = cookie['sb-refresh-token'] as unknown as string
    await client.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken,
    })
  }
  return client
}

const getSchemaClient = async (schema: string) => { 
  const client = await createClient(SUPABASE_URL!, SUPABASE_KEY!, {
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
  return client
}

const getAuthorizationClient = async () => {
  if (!authorizationClient) {
    authorizationClient = await createClient(SUPABASE_URL!, SUPABASE_KEY!, {
      db: {
        schema: 'public',
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
  }
  return authorizationClient
}


