import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Display from './components/Display.vue';



const routes = [
  {
    name: 'Registration',
    path: '/',
    component: Registration
  },

  {
    name: 'Login',
    path: '/login',
    component: Login
  },

  {
    name: 'Display',
    path: '/display',
    component: Display
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
