import * as elements from "typed-html";

export function HeaderBar() {
  return (
    <div class="flex w-full bg-purple-300 justify-between">
      <div>HEADER BAR</div>
      <div
        hx-get='/auth/user-logout'
        hx-swap="innerHTML"
        hx-trigger="load"
      ></div>
      <a href="http://localhost:54324/monitor">Inbucket</a>
    </div>              
  )
}
