import Vuex from 'vuex'
import getters from './getter'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    activeNames:'1',
    text:'what is vuex'
  } ,
  getters,

})