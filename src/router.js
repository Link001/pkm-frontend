import Vue from 'vue'
import Router from 'vue-router'
import {dashboardRoutes} from "./components/dashboard/routes";
import {authRoutes} from "./components/auth/routes";

Vue.use(Router);

export default new Router({
    routes: [
        dashboardRoutes,
        authRoutes,
        {
            path: '/',
            redirect: { name: 'dashboard' }
        },
        {
            path: '*',
            redirect: { name: 'dashboard' }
        },
    ]
});
