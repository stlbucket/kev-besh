import * as elements from "typed-html";
import { BaseHtml } from './BaseHtml';
import { HeaderBar } from './HeaderBar';
import { LeftNav } from './LeftNav';

export const Page = ({html, content}) => {
  return html(
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400" id="app">
          {<HeaderBar />}
          <div class="flex grow bg-gray-400 m-10 h-screen">
            <LeftNav />
            <div class="flex grow flex-col" id="main-content">
              {content}
            </div>
          </div>
        </div>
      </body>
    </BaseHtml>
  )

}