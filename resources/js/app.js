require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'



Vue.use(VueRouter)


  
import App from './components/App'
import Hello from './components/Hello'
import Home from './components/Home'
import Card from './components/Card'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/card',
            name: 'card',
            component: Card,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});