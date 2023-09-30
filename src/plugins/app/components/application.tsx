import * as elements from "typed-html";
import { Application } from '../database/types';

export function ApplicationItem({ name, key }: Application) {
  return (
    <tr>
      <td>{name}</td>
      <td>{key}</td>
    </tr>
  );
}

export function ApplicationList({ applications }: { applications: Application[] }) {
  return (
    <div>
      <table class="table delete-row-example">
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <ApplicationItem {...application} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
