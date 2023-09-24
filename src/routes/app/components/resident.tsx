import * as elements from "typed-html";
import { Resident } from '../../../database/types';

export function ResidentItem({ tenant_name, email, display_name }: Resident) {
  return (
    <tr>
      <td>${tenant_name}</td>
      <td>${email}</td>
      <td>${display_name}</td>
      <td>
        <form hx-post="/auth/sign-in-otp">
          <input type="hidden" name='email' value={email}></input>
          <input type="submit" value="Login" />
        </form>
      </td>
    </tr>
  );
}

export function ResidentList({ residents }: { residents: Resident[] }) {
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
            <ResidentItem {...resident} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
