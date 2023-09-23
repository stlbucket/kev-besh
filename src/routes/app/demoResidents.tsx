import { Elysia } from 'elysia'
import * as elements from "typed-html";
import {query} from '../../database'
import {useSupabaseClient} from '../../database/supabase'

const DemoResidentsRoute = (app: Elysia) =>
    app
    .state('plugin-version', 1)
    .get('/demo-app-residents', async () => {
      const { data, error } = await useSupabaseClient('app_api')
        .rpc('demo_profile_residencies')
      
      return <ResidentList Residents={data} />;
    })


export { DemoResidentsRoute }



function ResidentItem({ tenant_name, email, display_name }: AppResident) {
  return (
    <div class="flex justify-between">
      <div class="flex">{tenant_name}</div>
      <div class="flex">{email}</div>
      <div class="flex">{display_name}</div>
    </div>
  );
}

function ResidentList({ Residents }: { Residents: AppResident[] }) {
  return (
    <div class="flex flex-col gap-3">
      <div class="flex justify-center">
        TABLE HEADER
      </div>
      {Residents.map((Resident) => (
        <ResidentItem {...Resident} />
      ))}
    </div>
  );
}
