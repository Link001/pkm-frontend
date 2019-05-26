import {Enumeration} from "./base/enumeration";

export class UserRole extends Enumeration {
    static get STUDENT() {
        return 'student';
    }

    static get TEACHER() {
        return 'teacher';
    }

    get isStudent() {
        return this.is(UserRole.STUDENT);
    }

    get isTeacher() {
        return this.is(UserRole.TEACHER);
    }
}
