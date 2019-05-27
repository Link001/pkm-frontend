import { store } from '../../../store';
import {loaderActions} from "../../loader/loader-actions";

export function notTeacherGuard(from, to, next) {
    const loaderKey = '[DASHBOARD:TEACHER] Is Teacher?';

    store.dispatch(loaderActions.addToQueue, loaderKey);

    function complete(route) {
        store.dispatch(loaderActions.complete, loaderKey);
        next(route);
    }
    if (store.state.user.current.role.isTeacher) return complete();

    complete({ name: 'dashboard' });
}
