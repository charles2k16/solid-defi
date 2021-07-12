import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import AirDrop from '@/views/AirDrop';
import BuyNft from '@/views/BuyNft';
import Presale from '@/views/Presale';
import RefferalCount from '@/views/RefferalCount';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: ['/eth', '/matic'],
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
  {
    path: '/presale',
    name: 'Presale',
    component: Presale,
  },
  {
    path: '/refferal-airdropcount',
    name: 'RefferalCount',
    component: RefferalCount,
  },
];

const router = new VueRouter({
  linkActiveClass: "open active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
