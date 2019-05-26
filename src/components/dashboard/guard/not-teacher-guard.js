import { store } from '../../../store';

export function notTeacherGuard(from, to, next) {
    if (store.state.user.current.role.isTeacher) return next();

    next({ name: 'dashboard' });
}
