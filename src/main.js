import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import robot from '@/components/robot/index.vue'

Vue.config.productionTip = false

Vue.component('z-robot', robot)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
