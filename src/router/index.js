import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Hero from '@/views/sections/Hero';
import TokenSwap from '@/components/TokenSwap';
import TokenSwap2 from '@/components/TokenSwap2';
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
      },
      {
        path: "about",
        name: "About",
        component: About
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
        path: "/app/swap2",
        name: "TokenSwap2",
        component: TokenSwap2
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
