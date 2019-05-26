import AboutSubject from './AboutSubject';
import AboutPrograms from './about-programs/AboutPrograms';
import Dashboard from './Dashboard';
import Contact from "./Contact";
import Labs from './Labs';
import Lectures from './Lectures';
import {unAuthGuard} from "./un-auth-guard";

export const dashboardRoutes = {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    redirect: { name: 'about-subject' },
    children: [
        {
            name: 'about-subject',
            path: 'about-subject',
            component: AboutSubject
        },
        {
            path: 'about-programs',
            component: AboutPrograms,
            name: 'about-programs'
        },

        {
            name: 'labs',
            path: 'labs',
            component: Labs,
        },

        {
            name: 'lectures',
            path: 'lectures',
            component: Lectures
        },

        {
            name: 'contact',
            path: 'contact',
            component: Contact
        }
    ],
    beforeEnter: unAuthGuard
};
