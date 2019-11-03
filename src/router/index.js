import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import List from '../views/List';
import List_2 from '../views/List_2';
import IfElse from '../views/IfElse';
import Computed from '../views/Computed';
import Hooks from '../views/Hooks';

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
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: Hooks
  },
  {
    path: '/dynamic',
    component: () =>
      import(/* webpackChunkName: "dynamic" */ '../views/Dynamic.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
