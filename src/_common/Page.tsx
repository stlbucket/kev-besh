import * as elements from "typed-html";
import { BaseHtml } from './BaseHtml';
import { HeaderBar } from './HeaderBar';
import { LeftNav } from './LeftNav';

export const Page = async ({html, content, context}) => {
  const headerBar = await HeaderBar(context)
  const leftNav = await LeftNav(context)
  return html(
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400" id="app">
          {headerBar}
          <div class="flex grow bg-gray-400 m-10 h-screen">
            {leftNav}
            <div class="flex grow flex-col" id="main-content">
              {content}
            </div>
          </div>
        </div>
      </body>
    </BaseHtml>
  )

}