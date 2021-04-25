import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import TokenSwap from '@/components/TokenSwap';
import TokenSwap2 from '@/components/TokenSwap2';
import Pool from '@/components/Pool';
import Charts from '@/views/Charts';
import Exchange from '@/views/Exchange';
import AddLiquidity from '@/components/AddLiquidity';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
      {
        path: "/app/charts",
        name: "Charts",
        component: Charts
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
