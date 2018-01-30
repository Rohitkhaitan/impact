import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Register from './components/Registration.vue'
import Login from './components/Login.vue'
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

const routes = [
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
    name: 'registration',
    path: '/registration',
    component: Registration
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },

  {
    name: 'CreateItem',
    path: '/create/item',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
