import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Hero from '@/views/sections/Hero';
import TokenSwap from '@/components/TokenSwap';
import Pool from '@/components/Pool';
import Faqs from '@/views/Faqs';
import Exchange from '@/views/Exchange';
import AddLiquidity from '@/components/AddLiquidity';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "home",
        name: "Hero",
        component: Hero
      },
      {
        path: "faqs",
        name: "Faqs",
        component: Faqs
      }
    ]
  },
  {
    path: '/app',
    redirect: '/app/swap',
    name: 'Exchange',
    component: Exchange,
    children: [
      {
        path: "/app/swap",
        name: "TokenSwap",
        component: TokenSwap
      },
      {
        path: "/app/pool",
        name: "Pool",
        component: Pool
      },
      {
        path: "/app/pool/add",
        name: "Add Pool",
        component: AddLiquidity
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
