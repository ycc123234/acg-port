import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './services/api'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
api.__proto__=Vue.prototype
Vue.prototype.$api=api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
