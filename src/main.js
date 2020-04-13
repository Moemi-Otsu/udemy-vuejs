import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber); //グローバル登録
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width; //binding.valueでテンプレから動的にデータを受け取れる
  el.style.borderColor = binding.value.color;
});

new Vue({
  render: h => h(App),
}).$mount('#app');