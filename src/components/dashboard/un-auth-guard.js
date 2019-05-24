import store from '../../store';
import {authActions} from "../auth/auth-actions";

export function unAuthGuard(from, to, next) {
    if (store.getters.isAuthenticated) return next();

    store.dispatch(authActions.autoSignIn).then(() => {
        if (!store.getters.isAuthenticated) return next({ name: 'sign-in' });

        next();
    });
}

