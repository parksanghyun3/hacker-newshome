import Vue from 'vue'
import App from './App.vue'
// 문법때문에 중괄호로 감싸지 않으면 에러가 발생한다.
// vue2, vue3 버전과 vue router의 버전 차이가 중요한거 같다.
import { router } from './router/index.js';
import { store } from './store/index.js';


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


