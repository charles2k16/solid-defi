import Vue from 'vue';
import App from './App.vue';
import mixin from './mixins';
import router from './router';
import { store } from "./store/";
import 'material-icons/iconfont/material-icons.css';

// import drizzleVuePlugin from '@drizzle/vue-plugin'
// import drizzleOptions from '@/plugins/drizzle'

import '@/assets/css/base.css';
import '@/assets/css/display.css';
import "@/plugins/element/index.js";
import '@/plugins/vuesax';
import '@/plugins/apexCharts';

Vue.mixin(mixin);

// const store = new Vuex.Store({ state: {} });
// Vue.use(drizzleVuePlugin, { store, drizzleOptions });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
