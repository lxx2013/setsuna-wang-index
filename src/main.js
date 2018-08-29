import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
Vue.use(ElementUI);
import store from './store'


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')