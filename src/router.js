import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login';
import {dashboardRoutes} from "./components/dashboard/routes";

Vue.use(Router);

export default new Router({
    routes: [
        dashboardRoutes,
        {
            path: '/',
            redirect: { name: 'dashboard' }
        },
        {
            path: '*',
            redirect: { name: 'dashboard' }
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
});
