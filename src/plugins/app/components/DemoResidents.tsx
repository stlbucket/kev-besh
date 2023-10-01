import * as elements from "typed-html";
import { Resident } from '../database/types';

export function DemoResidentItem(resident: Resident) {
  return (
    <tr>
      <td>{resident.tenant_name}</td>
      <td>{resident.email}</td>
      <td>{resident.display_name}</td>
      <td>
        <form hx-post="/auth/api/sign-in-otp">
          <input type="hidden" name='email' value={resident.email}></input>
          <input type="submit" value="Login" />
        </form>
      </td>
    </tr>
  );
}

export function DemoResidentList({ residents }: { residents: Resident[] }) {
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
            <DemoResidentItem {...resident} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
