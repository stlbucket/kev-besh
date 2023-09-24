import { Elysia } from 'elysia'
import * as elements from "typed-html";
import { BaseHtml } from './app/components/_common/BaseHtml';
import { HeaderBar } from './app/components/_common/HeaderBar';
import { LeftNav } from './app/components/_common/LeftNav';
import { Page } from './app/components/_common/Page';

const HomeRoute = new Elysia()
    .state('plugin-version', 1)
    .get("/", ({ html }) => {
      const path = '/demo-app-residents'
      return Page({html, path})
    })

export { HomeRoute }

