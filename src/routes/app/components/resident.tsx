import * as elements from "typed-html";
import { Resident } from '../../../database/types';

export function ResidentItem({ tenant_name, email, display_name }: Resident) {
  return (
    <div class="flex gap-4 grow">
      <div class="flex justify-start">{tenant_name}</div>
      <div class="flex justify-start">{email}</div>
      <div class="flex justify-start">{display_name}</div>
    </div>
  );
}

export function ResidentList({ Residents }: { Residents: Resident[] }) {
  return (
    <div class="flex flex-col gap-3 grow">
      <div class="flex justify-center">
        TABLE HEADER
      </div>
      {Residents.map((Resident) => (
        <ResidentItem {...Resident} />
      ))}
    </div>
  );
}
