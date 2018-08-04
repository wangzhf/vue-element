import Vue from 'vue';
import router from './router'
import Element from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium',
  zIndex: 3000
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App />'
});
