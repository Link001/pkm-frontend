import {Database} from "../../firebase/database";
import {User} from "../user";
import {LabReview} from "./lab-review";
import {databaseSnapshotToArray} from "../../helpers";

export class UserLabs {
    constructor({user, labs}) {
        this.user = user;
        this.labs = labs;
    }

    static fromDatabaseSnapshot(snapshot) {
        return Promise.all([
            Database.instance.get(`users/${snapshot.key}`).then(user => User.fromDatabaseSnapshot(user)),
            LabReview.fromDatabaseArraySnapshot(snapshot.child('labs'))
        ])
            .then(([user, labs]) => new UserLabs({user, labs}));
    }

    static fromDatabaseArraySnapshot(snapshot) {
        const labs = databaseSnapshotToArray(snapshot).map(lab => UserLabs.fromDatabaseSnapshot(lab));
        return Promise.all(labs);
    }
}
