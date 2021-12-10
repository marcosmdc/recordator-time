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
import Clase from './components/Clase'
import Asistencia from './components/Asistencia'
//import JqueryTable from './components/JqueryTable.vue'

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
        {
            path: '/clase',
            name: 'clase',
            component: Clase,
        },
        {
            path: '/asistencia',
            name: 'asistencia',
            component: Asistencia,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
