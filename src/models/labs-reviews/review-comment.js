import {Database} from "../../firebase/database";
import {databaseSnapshotToArray} from "../../helpers";

export class ReviewComment {
    constructor({ user, text, date }) {
        this.user = user;
        this.text = text;
        this.date = date;
    }

    static fromDatabaseSnapshot(snapshot) {
        const uid = snapshot.child('uid').val();

        return Database.instance.get(`/users/${uid}`).then(user => new ReviewComment({
            user,
            text: snapshot.child('text'),
            date: snapshot.child('date')
        }))
    }

    static fromDatabaseArraySnapshot(snapshot) {
        const comments = databaseSnapshotToArray(snapshot).map(comment => ReviewComment.fromDatabaseSnapshot(comment));
        return Promise.all(comments);
    }
}
