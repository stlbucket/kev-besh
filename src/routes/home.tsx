import { Elysia } from 'elysia'
import * as elements from "typed-html";

const HomeRoute = new Elysia()
    .state('plugin-version', 1)
    .get("/", ({ html }) =>
      html(
        <BaseHtml>
          <body
            class="flex w-full h-screen justify-center items-center bg-green-400"
            hx-get="/demo-app-residents"
            hx-swap="innerHTML"
            hx-trigger="load"
          />
        </BaseHtml>
      )
    )

export { HomeRoute }

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`;
