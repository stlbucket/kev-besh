import * as elements from "typed-html";
import { createClient } from '@supabase/supabase-js'

export function UserLogout(user: any) {
  return (
    <div class="flex gap-4">
      <div>{user.data.user.email}</div>
      <button
        hx-on:click="
        console.log('cc')

        "
      >
        Logout
      </button>
    </div>
  );
}
