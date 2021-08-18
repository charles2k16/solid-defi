import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import AirDrop from '@/views/AirDrop';
import BuyNft from '@/views/BuyNft';
import SalesBundle from '@/views/SalesBundle';
import RefferalCount from '@/views/RefferalCount';
import SolidFoundry from '@/views/SolidFoundry';
// const Presale = () => import('../views/Presale')

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
  {
    path: '/presale',
    alias: ['/eth', '/matic', '/wEth'],
    name: 'Presale',
    component: SalesBundle,
  },
  {
    path: '/refferal-airdropcount',
    name: 'RefferalCount',
    component: RefferalCount,
  },
  {
    path: '/solidfoundry',
    name: 'Foundry',
    component: SolidFoundry,
  },
];

const router = new VueRouter({
  linkActiveClass: "open active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
