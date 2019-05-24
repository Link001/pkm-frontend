import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './components/SignIn';
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
            name: 'sign-in',
            path: '/sign-in',
            component: SignIn
        }
    ]
});
