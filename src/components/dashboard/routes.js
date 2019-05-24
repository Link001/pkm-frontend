import AboutSubject from './AboutSubject';
import AboutPrograms from './about-programs/AboutPrograms';
import Dashboard from './Dashboard';
import EducationMaterials from "./EducationMaterials";
import Contact from "./Contact";
import {unAuthGuard} from "./un-auth-guard";

export const dashboardRoutes = {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
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
            name: 'education-materials',
            path: 'education-materials',
            component: EducationMaterials,
        },

        {
            name: 'contact',
            path: 'contact',
            component: Contact
        }
    ],
    beforeEnter: unAuthGuard
};
