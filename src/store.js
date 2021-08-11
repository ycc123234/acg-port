import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myAudio: null,
    // work  正常  pic 壁纸模式
    mode: 'work',
    loading:false
  },
  mutations: {//需要执行多个state 的操作 , 使用 mutations 会来触发会比较好维护
    increment(state, myaudio) {

    },
      picMode(state,is) {
      if(is){
        state.mode='pic'
      }else{
        state.mode='work'
      }
    }
  },
  actions: {//需要执行多个 mutations 就需要用 action 了
    
  },
  getters: {//如果要使用watch观察状态改变那么一定配置这一项
    mode:state=>state.mode
	},  
})
