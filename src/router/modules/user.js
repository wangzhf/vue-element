/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const nestedRouter = {
  path: '/users',
  component: Layout,
  redirect: '/users/user1',
  name: 'users',
  meta: {
    title: 'users',
    icon: 'peoples'
  },
  children: [
    {
      path: 'user2',
      component: () => import('@/views/users/user2/index'), // Parent router-view
      name: 'user2',
      // always show the root menu
      alwaysShow: true,
      meta: { title: 'user2' },
      redirect: '/users/user2/user2-1',
      children: [
        {
          path: 'user2-1',
          component: () => import('@/views/users/user2/user2-1'),
          name: 'user2-1',
          meta: { title: 'user2-1' }
        }
      ]
    },
    {
      path: 'user1',
      name: 'user1',
      component: () => import('@/views/users/user1'),
      meta: { title: 'user1' }
    }
  ]
}

export default nestedRouter
