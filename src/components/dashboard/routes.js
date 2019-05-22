import AboutSubject from './AboutSubject';
import AboutPrograms from './about-programs/AboutPrograms';
import Dashboard from './Dashboard';

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
        }
    ]
};
