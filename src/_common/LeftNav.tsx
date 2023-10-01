import * as elements from "typed-html";

interface NavItem {
  name: string
  label: string
  path: string
  icon?: string
  permissionKey?: string
}

interface NavItemGroup { 
  key: string
  label: string
  permissionKey?: string
  items: NavItem[]
}

export async function LeftNav(context: any) {  
  const permissions = context.leUser?.user_metadata?.permissions || []
  return (
    <div class="flex flex-col h-full bg-red-100 p-5 gap-2">
      {navItemGroups.filter(g => !g.permissionKey || hasPermission(g.permissionKey, permissions)).map((i) => (
        <NavItemGroup {...i} />
      ))}
    </div>
  );
}

function NavItemGroup(navItemGroup: NavItemGroup) {
  return (
    <div class="flex flex-col bg-red-200 p-5 gap-1">
      <div class="text-xl">{navItemGroup.label}</div>
      {navItemGroup.items.map((i) => (
        <NavItem {...i} />
      ))}
    </div>
  )
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

const hasPermission = (permissionKey: string, permissions: string[]) => {
  return permissions.includes(permissionKey)
}

const navItemGroups: NavItemGroup[] = [
  {
    key: 'beta',
    label: 'Beta',
    items: [
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
        path: '/app/my-profile'
      },
      {
        name: 'applications',
        label: 'Applications',
        path: '/app/applications'
      },
      {
        name: 'license-packs',
        label: 'License Packs',
        path: '/app/license-packs'
      },
    ]
  },
  {
    key: 'todo',
    label: 'Todo',
    permissionKey: 'p:todo',
    items: [
      {
        label: 'Todo',
        icon: 'i-heroicons-clipboard-document-list',
        path: '/tools/todo',
        name: 'Todo',
        permissionKey: 'p:todo'
      },    
    ]
  },
  {
    key: 'tools',
    label: 'Tools',
    permissionKey: 'p:tools',
    items: [
      {
        label: 'Address Book',
        icon: 'i-heroicons-book-open',
        path: '/tools/address-book',
        name: 'Address Book',
        permissionKey: 'p:address-book'
      },
      {
        label: 'Locations',
        icon: 'i-heroicons-globe-americas',
        path: '/tools/maps',
        name: 'Locations'
        // permissionKey: 'p:maps'
      }    
    ]
  },
  {
    key: 'app-admin',
    label: 'App Admin',
    permissionKey: 'p:app-admin',
    items: [
      {
          label: 'App Users',
          icon: 'i-heroicons-users',
          path: '/admin/app-tenant-residencies',
          name: 'App Users',
        },
        {
          label: 'Subscriptons',
          icon: 'i-heroicons-newspaper',
          path: '/admin/app-tenant-subscriptions',
          name: 'Subscriptons',
        },
    ]
  },
  {
    key: 'site-admin',
    label: 'Site Admin',
    permissionKey: 'p:site-admin',
    items: [
      {
        label: 'Tenant Support',
        icon: 'i-heroicons-home',
        path: '/site-admin/tenant',
        name: 'Tenants',
      },
      {
        label: 'Tenant Residents',
        icon: 'i-heroicons-building-office',
        path: '/site-admin/tenant-residents',
        name: 'Tenant Residents',
      },
      {
        label: 'Site Users',
        icon: 'i-heroicons-users',
        path: '/site-admin/site-users',
        name: 'Site Users',
      },
      {
        label: 'License Packs',
        icon: 'i-heroicons-cog-6-tooth',
        path: '/site-admin/license-pack',
        name: 'License Packs',
      },
      {
        label: 'Applications',
        icon: 'i-heroicons-cog-6-tooth',
        path: '/site-admin/applications',
        name: 'Applications',
      },
    ]
  },
]
