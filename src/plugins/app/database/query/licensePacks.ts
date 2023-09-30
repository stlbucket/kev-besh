import {useSupabaseClient} from '../../../../supabase'

const licensePacks = async () => {
  const result = await (await useSupabaseClient('app'))
    .from('license_pack')
    .select(`
      *,
      license_pack_license_type(
        *,
        license_type(
          *,
          license_type_permission(
            *
          )
        )
      )
    `)
  return result.data
}

export { licensePacks }