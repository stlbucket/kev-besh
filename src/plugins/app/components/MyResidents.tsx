import * as elements from "typed-html";
import { Resident } from '../database/types';

export function MyResidentItem(resident: Resident) {
  return (
    <tr>
      <td>{resident.tenant_name}</td>
      <td>{resident.email}</td>
      <td>{resident.display_name}</td>
      <td>
        <form hx-post="/app/api/assume-residency" hx-target="#app" hx-push-url="true">
          <input type="hidden" name='id' value={resident.id}></input>
          <input type="submit" value="Assume" />
        </form>
      </td>
    </tr>
  );
}

export function MyResidentList({ residents }: { residents: Resident[] }) {
  return (
    <div>
      <table class="table delete-row-example">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Email</th>
            <th>Display Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <MyResidentItem {...resident} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
