const SUPABASE_URL="http://localhost:54321"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
// import { createClient, supabase } from '@supabase/supabase-js'

function supabaseLogout() {
  var client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  client.auth
    .signOut()
    .then((_response) => {
      window.location = '/'
    })
    .catch((e) => {
      console.error(e)
    })
}


// supabase.auth.onAuthStateChange((event, session) => {
//   if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
//     // delete cookies on sign out
//     const expires = new Date(0).toUTCString()
//     document.cookie = `sb-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
//     document.cookie = `sb-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
//   } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
//     const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
//     document.cookie = `sb-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
//     document.cookie = `sb-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
//   }
// })


function confirmLogin() {
  // const supabase = createClient(
  //   SUPABASE_URL,
  //   SUPABASE_KEY,
  //   {
  //     auth: {
  //       detectSessionInUrl: true,
  //       flowType: 'pkce'
  //     }
  //   }
  // )

  // const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
  // document.cookie = `sb-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  // document.cookie = `sb-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  
  alert('yo')
}

document.addEventListener('DOMContentLoaded', function() {
  confirmLogin();
}, false);
