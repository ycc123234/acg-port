import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './utils/api'
import consts from './utils/consts'
import qs from 'qs';
import "@/lib/font-awesome-4.7.0/scss/font-awesome.scss";
Vue.config.productionTip = false
Vue.prototype.$consts=consts
Vue.prototype.$qs=qs;
Vue.prototype.$axios=axios
api.__proto__=Vue.prototype
Vue.prototype.$api=api
// Vue.filter('dateFilter', function(d) {
//   d=Number(d);
// 	const date = new Date(d);
  
// 	var month =Number.parseInt(date.getMonth())+1
// 	var day = Number.parseInt(date.getDate())
// 	var hours = Number.parseInt(date.getHours())
//   var minutes = Number.parseInt(date.getMinutes())
  
// 	month =month>10? month : ('0' +month);
// 	day =day>10? day : ('0' + day);
// 	hours =hours>10? hours : ('0' + hours);
// 	minutes =minutes>10? minutes : ('0' + minutes);
	
//   return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
  
// })


new Vue({
  router,
  store,
  consts,
  render: h => h(App)
}).$mount('#app')
