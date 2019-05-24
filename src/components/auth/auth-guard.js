import store from "../../store";
import {authActions} from "./auth-actions";

export function authGuard(from, to, next) {
    if (!store.getters.isAuthenticated) return next();

    store.dispatch(authActions.autoSignIn).then(() => {
        if (store.getters.isAuthenticated) return next({ name: 'dashboard' });

        next();
    });
}
