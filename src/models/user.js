import {UserRole} from "./user-role";

export class User {
    constructor({ uid, name, role }) {
        this.uid = uid;
        this.name = name;
        this.role = new UserRole(role);
    }
}
