const SUPABASE_URL="http://localhost:54321"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"

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
