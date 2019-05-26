import AboutSubject from './AboutSubject';
import AboutPrograms from './about-programs/AboutPrograms';
import Dashboard from './Dashboard';
import Contact from "./Contact";
import Labs from './labs/Labs';
import Lectures from './Lectures';
import LabsReview from './labs/LabsReview';
import {unAuthGuard} from "./guard/un-auth-guard";
import {notTeacherGuard} from "./guard/not-teacher-guard";
import {loadLabsResolver} from "./labs/load-labs-resolver";

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
            beforeEnter: loadLabsResolver
        },
        {
            name: 'lectures',
            path: 'lectures',
            component: Lectures
        },
        {
            name: 'labs-review',
            path: 'teacher/labs-review',
            component: LabsReview,
            beforeEnter: notTeacherGuard
        },
        {
            name: 'contact',
            path: 'contact',
            component: Contact
        }
    ],
    beforeEnter: unAuthGuard
};
