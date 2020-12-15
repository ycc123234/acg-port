import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './services/api'
import ElementUI from 'element-ui'
import qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$qs=qs;
axios.interceptors.request.use(
  config => {
  // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('Authorization')
    if (!config.headers.hasOwnProperty('Authorization') && token) {
      config.headers.Authorization ='Bearer '+ token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
Vue.prototype.$axios=axios


api.__proto__=Vue.prototype
Vue.prototype.$api=api

Vue.filter('dateFilter', function(d) {
  d=Number(d);
	const date = new Date(d);
  
	var month =Number.parseInt(date.getMonth())+1
	var day = Number.parseInt(date.getDate())
	var hours = Number.parseInt(date.getHours())
  var minutes = Number.parseInt(date.getMinutes())
  
	month =month>10? month : ('0' +month);
	day =day>10? day : ('0' + day);
	hours =hours>10? hours : ('0' + hours);
	minutes =minutes>10? minutes : ('0' + minutes);
	
  return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
  
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
