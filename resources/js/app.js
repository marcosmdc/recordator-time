require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.use(VueRouter)

import { BButton} from "bootstrap-vue";

Vue.component('b-button', BButton)
import { BModal} from "bootstrap-vue";

Vue.component('b-modal', BModal)
//Vue.component('v-b-modal', BModal)



import App from './components/App'
import Hello from './components/Hello'
import Home from './components/Home'
import Card from './components/Card'
import Alumno from './components/Alumno'
import Register from './components/Register'
import Login from './components/Login'
import Clase from './components/Clase'
import Asistencia from './components/Asistencia'

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
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'clase',
            path: '/clase',
            component: Clase
        },
        {
            name: 'asistencia',
            path: '/asistencia',
            component: Asistencia
        },
    ],
});

//store.dispatch('checkAuth');

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});


