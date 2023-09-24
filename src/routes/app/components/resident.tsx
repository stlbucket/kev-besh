import * as elements from "typed-html";
import { Resident } from '../../../database/types';

// export function ResidentItem({ tenant_name, email, display_name }: Resident) {
//   return (
//     <div class="flex gap-4 grow">
//       <div id="parent-div">
//         <button 
//           hx-post="/auth/sign-in-otp"
//           hx-trigger="click"
//           hx-target="#parent-div"
//           hx-swap="outerHTML"
//         >
//           Click Me!
//         </button>
//       </div>

//       <div class="flex justify-start">{tenant_name}</div>
//       <div class="flex justify-start">{email}</div>
//       <div class="flex justify-start">{display_name}</div>
//     </div>
//   );
// }

// export function ResidentList({ Residents }: { Residents: Resident[] }) {
//   return (
//     <div class="flex flex-col gap-3 grow">
//       <div class="flex justify-center">
//         TABLE HEADER
//       </div>
      // {Residents.map((Resident) => (
      //   <ResidentItem {...Resident} />
      // ))}
//     </div>
//   );
// }

export function ResidentItem({ tenant_name, email, display_name }: Resident) {
  return (
    <tr>
      <td>${tenant_name}</td>
      <td>${email}</td>
      <td>${display_name}</td>
      <td>
        <form hx-post="/auth/login" hx-target="#response">
          <input type="hidden" name='email' value={email}></input>
          <input type="submit" value="Login" />
        </form>
      </td>
    </tr>
  );
}

{/* <td>
<button hx-post="/login" name='' hx-include="[name='email']">
  Login!
</button>
<input type="hidden" name="email" value="email" />
</td> */}


// export function ResidentItem({ tenant_name, email, display_name }: Resident) {
//   return (
//     <tr>
//       <td>${tenant_name}</td>
//       <td>${email}</td>
//       <td>${display_name}</td>
//       <td>
//         <button class="btn btn-danger"
//           hx-post="/auth/login"
//           hx-trigger="login"
//           _="on click
//             // if .editing is not empty
//             //   Swal.fire({title: 'Already Editing',
//             //     showCancelButton: true,
//             //     confirmButtonText: 'Yep, Edit This Row!',
//             //     text:'Hey!  You are already editing a row!  Do you want to cancel that edit and continue?'})
//             //   if the result's isConfirmed is false
//             //     halt
//             //   end
//             //   send cancel to .editing
//             // end
//             trigger login
//           ">
//           Login
//         </button>
//       </td>
//     </tr>
//   );
// }

export function ResidentList({ Residents }: { Residents: Resident[] }) {
  return (
    <div>
      <div id="response"></div>
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
          {Residents.map((Resident) => (
            <ResidentItem {...Resident} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
