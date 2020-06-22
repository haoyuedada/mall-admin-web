import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    isActive:false
  },
  mutations:{
    spreadMenu(state){
      state.isActive = !state.isActive;
    }
  }
})

export default store;
