import * as elements from "typed-html";
import { BaseHtml } from './BaseHtml';
import { HeaderBar } from './HeaderBar';
import { LeftNav } from './LeftNav';

export const Page = ({html, path}) => {
  return html(
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400" id="app">
          {<HeaderBar />}
          <div class="flex grow bg-gray-400 m-10 h-screen">
            <LeftNav />
            <div class="flex grow flex-col gap-5">
              <form hx-target='/auth/sign-in'>
                <div class="flex flex-col gap-1 max-w-md">
                  <div class="flex flex-col gap-1">
                    <div class="text-xs">Email</div>
                    <input type="text"></input>
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="text-xs">Password</div>
                    <input type="text"></input>
                  </div>
                </div>
                <button type="submit">Login</button>
              </form>
              <div
                class="bg-blue-400 grow"
                hx-get={path}
                hx-swap="innerHTML"
                hx-trigger="load"
              ></div>
            </div>
          </div>
        </div>
      </body>
    </BaseHtml>
  )

}