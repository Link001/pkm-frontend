import {UserRole} from "./user-role";

export class User {
    constructor({ uid, name, role }) {
        this.uid = uid;
        this.name = name;
        this.role = new UserRole(role);
    }

    static fromDatabaseSnapshot(snapshot) {
        return new User({
            uid: snapshot.key,
            name: snapshot.child('name').val(),
            role: snapshot.child('role').val()
        });
    }
}
