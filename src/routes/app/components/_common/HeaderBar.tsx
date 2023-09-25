import * as elements from "typed-html";

export function HeaderBar() {
  return (
    <div class="flex w-full bg-purple-300 justify-between">
      <div>HEADER BAR</div>
      <button hx-on:click="window.location = '/auth/sign-out'">blogout</button>
      <a href="/auth/sign-out">
        Logout
      </a>
      <button hx-on:click="alert(document.cookie)">cookie</button>
      <a href="http://localhost:54324/monitor">Inbucket</a>
    </div>              
  )
}
