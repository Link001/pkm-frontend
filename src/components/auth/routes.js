import SignIn from './SignIn';
import {authGuard} from "./auth-guard";

export const authRoutes = {
    name: 'sign-in',
    path: '/sign-in',
    component: SignIn,
    beforeEnter: authGuard
};
