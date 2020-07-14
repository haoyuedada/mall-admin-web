import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    isActive:false,
    systemColor:'#304156'
  },
  mutations:{
    spreadMenu(state){
      state.isActive = !state.isActive;
    },
    setStoreGolbalColor(state){
      state.systemColor;
    }
  }
})

export default store;
