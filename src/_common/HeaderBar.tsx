import * as elements from "typed-html";
import { useSupabaseClient } from "../supabase";

export async function HeaderBar(context: any) {
  const client = (await useSupabaseClient('auth', context))

  const session = await client.auth.getSession()
  const tenantName = session?.data?.session?.user.user_metadata?.tenant_name || 'Not Logged In'
  return (
    <div class="flex w-full bg-purple-300 justify-between">
      <div>HEADER BAR</div>
      <div>{tenantName}</div>
      <button hx-post='/auth/api/sign-out' hx-trigger='click' hx-target='#app' hx-push-url="true">Logout</button>
    </div>              
  )
}
