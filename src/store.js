import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myAudio:null,
    token:null,
    Authorization:sessionStorage.getItem('Authorization')?sessionStorage.getItem('Authorization'):''
  },
  mutations: {
    increment (state,myaudio) {
      
    },
    changeLogin(state,user){
      state.Authorization=user.Authorization;
      sessionStorage.setItem('Authorization',user.Authorization);
    }
    
  },
  actions: {

  }
})
