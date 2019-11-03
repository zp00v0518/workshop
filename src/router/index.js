import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import List from '../views/List';
import List_2 from '../views/List_2';
import IfElse from '../views/IfElse';
import Computed from '../views/Computed';
import Hooks from '../views/Hooks';
import VuexPage from '../views/VuexPage';
import ChildParent from '../views/ChildParent';
import ParentChild from '../views/ParentChild';
import UseVue from '../views/UseVue';

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
    path: '/vuex',
    name: 'VuexPage',
    component: VuexPage
  },
  {
    path: '/child-parent',
    name: 'ChildParent',
    component: ChildParent
  },
  {
    path: '/parent-child',
    name: 'ParentChild',
    component: ParentChild
  },
  {
    path: '/usevue',
    name: 'UseVue',
    component: UseVue
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
