import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Home from './components/Home.vue';
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import CreateItem from './components/Profile.vue';



const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Registration',
    path: '/registration',
    component: Registration
  },

  {
    name: 'Login',
    path: '/login',
    component: Login
  },

  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  },

];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
