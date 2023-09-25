import * as elements from "typed-html";
import { BaseHtml } from "../../app/components/_common/BaseHtml";

export function LogoutPage() {
  return (
    <BaseHtml>
      <body>
        <div class="flex flex-col w-full h-screen bg-yellow-400">
          LOGOUT
        </div>
        <script>
          supabaseLogout();
        </script>
      </body>
    </BaseHtml>
  );
}
