import {useSupabaseClient} from '../../../../supabase'

const applications = async () => {
  const result = await (await useSupabaseClient('app'))
    .from('application')
    .select('*')
  console.log('result', result.data)
  return result.data
}

export { applications }