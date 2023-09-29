import * as elements from "typed-html";

export function HeaderBar() {
  return (
    <div class="flex w-full bg-purple-300 justify-between">
      <div>HEADER BAR</div>
      {/* <button hx-on:click="window.location = '/auth/sign-out'">blogout</button> */}
      <button hx-post='/auth/sign-out' hx-trigger='click' hx-target='#app' hx-push-url="true">Logout</button>
      <button hx-on:click="alert(document.cookie)">cookie</button>
      <a href="http://localhost:54324/monitor">Inbucket</a>
    </div>              
  )
}
