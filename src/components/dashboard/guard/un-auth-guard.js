import { store } from '../../../store';
import {authActions} from "../../auth/auth-actions";
import {loaderActions} from "../../loader/loader-actions";

export function unAuthGuard(from, to, next) {
    const loaderKey = '[DASHBOARD] Is Auth?';

    store.dispatch(loaderActions.addToQueue, loaderKey);

    function complete(route) {
        store.dispatch(loaderActions.complete, loaderKey);
        next(route);
    }
    if (store.getters.isAuthenticated) return complete();

    store.dispatch(authActions.autoSignIn).then(() => {
        if (!store.getters.isAuthenticated) return complete({ name: 'sign-in' });

        complete();
    });
}
