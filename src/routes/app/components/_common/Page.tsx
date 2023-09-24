import * as elements from "typed-html";
import { BaseHtml } from './BaseHtml';
import { HeaderBar } from './HeaderBar';
import { LeftNav } from './LeftNav';

export const Page = ({html, path}) => {
  return html(
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400">
          {<HeaderBar />}
          <div class="flex grow bg-gray-400 m-10 h-screen">
            <LeftNav />
            <div
              class="bg-blue-400 grow"
              hx-get={path}
              hx-swap="innerHTML"
              hx-trigger="load"
            ></div>
          </div>
        </div>
      </body>
    </BaseHtml>
  )

}