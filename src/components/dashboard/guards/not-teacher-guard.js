import { store } from '../../../store';

export function notTeacherGuard(from, to, next) {
    if (store.state.auth.user.role.isTeacher) return next();

    next({ name: 'dashboard' });
}
