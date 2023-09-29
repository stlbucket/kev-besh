import * as elements from "typed-html";

interface NavItem {
  name: string
  label: string
  path: string
}

export function LeftNav() {
  const navItems: NavItem[] = [
    {
      name: 'home',
      label: 'Home',
      path: '/'
    },
    {
      name: 'my-profile',
      label: 'My Profile',
      path: '/auth/my-profile'
    }
  ]
  
  return (
    <div class="flex flex-col h-full bg-red-200 p-5 gap-2">
      {navItems.map((i) => (
        <NavItem {...i} />
      ))}
    </div>
  );
}


function NavItem({ path, label}: NavItem) {
  return (
    <button
      class="flex flex-nowrap bg-red-300" 
      hx-get={path}
      hx-target="#app"
      hx-boost="true"
      hx-push-url="true"
    >{label}</button>
  )
}