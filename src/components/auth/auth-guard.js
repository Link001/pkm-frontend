import { store } from "../../store";
import {authActions} from "./auth-actions";
import {loaderActions} from "../loader/loader-actions";

export function authGuard(from, to, next) {
    const loaderKey = '[AUTH] Is Not Auth?';

    store.dispatch(loaderActions.addToQueue, loaderKey);

    function complete(route) {
        store.dispatch(loaderActions.complete, loaderKey);
        next(route);
    }


    if (!store.getters.isAuthenticated) return complete();

    store.dispatch(authActions.autoSignIn).then(() => {
        if (store.getters.isAuthenticated) return complete({ name: 'dashboard' });

        complete();
    });
}
