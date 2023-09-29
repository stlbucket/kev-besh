import * as elements from "typed-html";

export function HeaderBar() {
  return (
    <div class="flex w-full bg-purple-300 justify-between">
      <div>HEADER BAR</div>
      {/* <button hx-on:click="window.location = '/auth/api/sign-out'">blogout</button> */}
      <button hx-post='/auth/api/sign-out' hx-trigger='click' hx-target='#app' hx-push-url="true">Logout</button>
    </div>              
  )
}
