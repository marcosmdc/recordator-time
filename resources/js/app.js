require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.use(VueRouter)


  
import App from './components/App'
import Hello from './components/Hello'
import Home from './components/Home'
import Card from './components/Card'
import Alumno from './components/Alumno'
import Register from './components/Register'

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
        {
            path: '/alumno',
            name: 'alumno',
            component: Alumno,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
