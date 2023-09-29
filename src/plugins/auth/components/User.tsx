import * as elements from "typed-html";

export function User(user: any) {
  return (
    <pre>{JSON.stringify(user,null,2)}</pre>
  );
}
