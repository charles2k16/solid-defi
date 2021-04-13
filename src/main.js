import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex'
import 'material-icons/iconfont/material-icons.css';

import '@/assets/css/base.css';
import '@/plugins/vuesax';

Vue.use(Vuex)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
