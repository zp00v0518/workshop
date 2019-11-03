import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import List from '../views/List';
import List_2 from '../views/List_2';
import IfElse from '../views/IfElse';
import Computed from '../views/Computed';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/list_2',
    name: 'List_2',
    component: List_2
  },
  {
    path: '/ifelse',
    name: 'IfElse',
    component: IfElse
  },
    {
    path: '/computed',
    name: 'Computed',
    component: Computed
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
