import Vue from "vue";
import {
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Loading,
} from 'element-ui';
import "./element-variables.scss";

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;