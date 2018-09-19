import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [{
  path: '/',
  component: Layout,
  hidden: true
}]

export default new Router({
  routes: constantRouterMap
})
