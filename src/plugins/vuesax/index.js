import Vue from 'vue'
import Vuesax from 'vuesax'
import './vuesax-variables.scss';

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary: '#1A1D29',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(170, 168, 168)',
    dark: 'rgb(36, 33, 69)'
  }
})