import {dashboardRoutes} from "../components/dashboard/routes";
import {authRoutes} from "../components/auth/routes";

export const appRoutes = [
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
];
