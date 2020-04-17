import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber); //グローバル登録

new Vue({
  render: h => h(App),
}).$mount('#app');