import {useSupabaseClient} from '../../../../supabase'

const assumeResidency = async (context: any) => {
  const residentId = context.body.id
  const client = await useSupabaseClient('app_api', context)
  const result = await client
    .rpc('assume_residency', {
      _resident_id: residentId
    })

  const {data, error} = await client.auth.getSession()
  await client.auth.setSession({
    access_token: data.session.access_token,
    refresh_token: data.session.refresh_token,
    auth: {
      persistSession: true
    }
  })
  console.log('data',data)
  context.setCookie('sb-access-token', data.session.access_token)
  context.setCookie('sb-refresh-token', data.session.refresh_token)
  context.setCookie('logged-in', 'true')

  return result
}

export { assumeResidency }