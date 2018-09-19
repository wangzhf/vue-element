import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import filters from './filters'
// import NPorgess from 'nprogress'

Vue.use(ElementUI, {
  size: 'medium'
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
