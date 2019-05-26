import AboutSubject from './AboutSubject';
import AboutPrograms from './about-programs/AboutPrograms';
import Dashboard from './Dashboard';
import EducationMaterials from "./EducationMaterials";
import Contact from "./Contact";
import {unAuthGuard} from "./un-auth-guard";
import Educatio from "./Educatio";

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
            name: 'education-materials',
            path: 'education-materials',
            component: EducationMaterials,
        },

        {
            name: 'contact',
            path: 'contact',
            component: Contact
        },

        {
          name: 'educatio',
          path: 'educatio',
          component: Educatio
        }
    ],
    beforeEnter: unAuthGuard
};
