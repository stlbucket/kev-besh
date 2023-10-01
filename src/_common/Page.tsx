import * as elements from "typed-html";
import { BaseHtml } from './BaseHtml';
import { HeaderBar } from './HeaderBar';
import { LeftNav } from './LeftNav';

export const Page = async ({html, content, context}) => {
  const headerBar = await HeaderBar({context})
  return html(
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400" id="app">
          {headerBar}
          <div class="flex grow bg-gray-400 m-10 h-screen">
            <LeftNav />
            {/* NOT SURE WHICH LEFT NAV APPROACH IS BETTER -- BOTTOM ONE FLASHES, BUT WE COULD FIX THAT FOR MORE DYNAMIC BEHAVIOR */}
            {/* PROBABLY WON'T EVEN BE THIS, BUT RATHER A SLIDE-OVER OR SOMETHING */}
            {/* EACH PLUGIN (app, auth, etc) SHOULD BE ABLE TO REGISTER MODULES AND MENU ITEMS THAT THEN ARE DYNAMICALLY POPULATED BASED ON PERMISSIONS */}
            {/* <div
              hx-get="/app/left-nav"
              hx-trigger="load"
            /> */}
            <div class="flex grow flex-col" id="main-content">
              {content}
            </div>
          </div>
        </div>
      </body>
    </BaseHtml>
  )

}