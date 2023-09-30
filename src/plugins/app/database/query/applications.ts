import {useSupabaseClient} from '../../../../supabase'

const applications = async () => {
  const result = await (await useSupabaseClient('app'))
    .from('application')
    .select(`
      *,
      license_type(
        *,
        license_type_permission(
          *
        )
      )
    `)

    return result.data
}

export { applications }