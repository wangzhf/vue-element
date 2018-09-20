import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Layout,
  hidden: true
}]

const router = new Router({
  routes: constantRouterMap
})

// 导航守卫
router.beforeEach((route, redirect, next) => {
  next()
})

export default router
