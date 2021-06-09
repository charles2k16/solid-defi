import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import AirDrop from '@/views/AirDrop';
import BuyNft from '@/views/BuyNft';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/airdrop',
    name: 'Airdrop',
    component: AirDrop,
  },
  {
    path: '/buynft',
    name: 'Nft',
    component: BuyNft,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
