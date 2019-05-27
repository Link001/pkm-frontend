import {Database} from "../../firebase/database";
import {databaseSnapshotToArray} from "../../helpers";
import {User} from "../user";

export class ReviewComment {
    constructor({ user, text, date }) {
        this.user = user;
        this.text = text;
        this.date = date;
    }

    get formattedDate() {
        return new Date(this.date).toLocaleString()
    }

    static fromDatabaseSnapshot(snapshot) {
        const uid = snapshot.child('uid').val();

        return Database.instance.get(`/users/${uid}`).then(user => new ReviewComment({
            user: User.fromDatabaseSnapshot(user),
            text: snapshot.child('text').val(),
            date: +snapshot.child('date').val()
        }))
    }

    static fromDatabaseArraySnapshot(snapshot) {
        const comments = databaseSnapshotToArray(snapshot).map(comment => ReviewComment.fromDatabaseSnapshot(comment));
        return Promise.all(comments);
    }
}
