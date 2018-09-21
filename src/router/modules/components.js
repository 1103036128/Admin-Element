/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const componentsRouter = {
  path: '',
  component: Layout,
  redirect: '/dashboard',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: 'dashboard',
    icon: 'dashboard',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: {
        icon: 'list',
        title: 'dashboard',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: {
        icon: 'icon',
        title: 'dashboard',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
  ]
}

export default componentsRouter
