import {useSupabaseClient} from '../../../../supabase'

const demoResidents = async () => {
  const result = await (await useSupabaseClient('app_api'))
    .rpc('demo_profile_residencies')

  return result
}

export { demoResidents }