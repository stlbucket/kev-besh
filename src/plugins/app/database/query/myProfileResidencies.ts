import {useSupabaseClient} from '../../../../supabase'

const myProfileResidencies = async (context: any) => {
  try {
    const result = await (await useSupabaseClient('app_api', context))
      .rpc('my_profile_residencies')
    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}

export { myProfileResidencies }