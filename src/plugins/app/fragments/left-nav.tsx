import { Elysia, t } from 'elysia'
import * as elements from "typed-html";

interface NavItem {
  name: string
  label: string
  path: string
}

function NavItem(navItem: NavItem) {
  return (
    <button
      class="flex flex-nowrap bg-red-300" 
      hx-get={navItem.path}
      hx-boost="true"
      hx-push-url="true"
      hx-target="#app"
    >{navItem.label}</button>
  )
}
const LeftNav = (app: Elysia) => {
  return app
    .get("/left-nav", async ({ html }) => {
      // THIS FUNCTION NEEDS TO BE TOTALLY DYNAMIC AND MOVED INTO THE APP PLUGIN
      // TO MAKE IT SO, I NEED TO ADD SOMETHING TO THE DATABASE - DIDN'T MAKE SENSE TO DO IT WITH VUE
      // BUT I THINK WITH THIS STACK IT WILL BE SUPER COOL
      
      const navItems: NavItem[] = [
        {
          name: 'home',
          label: 'Home',
          path: '/'
        },
        {
          name: 'demo-residents',
          label: 'Demo Residents',
          path: '/app/demo-app-residents'
        },
        {
          name: 'my-profile',
          label: 'My Profile',
          path: '/auth/my-profile'
        },
        {
          name: 'app/applications',
          label: 'Applications',
          path: '/app/applications'
        },
      ]
      
      return (
        <div class="flex flex-col h-full bg-red-200 p-5 gap-2">
          {navItems.map((i) => (
            <NavItem {...i} />
          ))}
        </div>
      );

    })
  }
export { LeftNav }
