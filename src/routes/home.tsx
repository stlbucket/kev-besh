import { Elysia } from 'elysia'

const HomeRoute = new Elysia()
    .state('plugin-version', 1)
    .get('/', () => 'Home')


export { HomeRoute }