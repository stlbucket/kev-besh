import { Elysia } from 'elysia'
import * as elements from "typed-html";
import {query} from '../../database'
import { AppResident } from '../../database/types/db.app'

const DemoResidentsRoute = (app: Elysia) =>
    app
    .state('plugin-version', 1)
    .get('/demo-app-residents', async () => {
      const result = await query.app.demoResidents()
      console.log(result)
      return <ResidentList Residents={result} />;
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
