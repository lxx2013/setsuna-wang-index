import Vuex from 'vuex'
import getters from './getter'
import Vue from 'vue'
import imageData from "./image-data"
console.log(imageData)
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    text:'what is vuex',
    imageData
  } ,
  getters,
  mutations:{
      update_played(state,num){
        state.imageData[0].number = num
      }
  },
  actions:{
    async update( { commit } , num){
        commit('update_played',num)
        console.log('update ok')
    }
  },
  
})

if (module.hot) {
  module.hot.accept([
    './getter',
  ], () => {
    store.hotUpdate({
      getters: store.getters,
      actions: store.actions,
      mutations: store.mutations
    })
  })
}

export default store