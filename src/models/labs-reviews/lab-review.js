import {Database} from "../../firebase/database";
import {databaseSnapshotToArray} from "../../helpers";
import {Lab} from "../lab";

export class LabReview {
    constructor({ lab }) {
        this.lab = lab;
        // this.comments = comments;
    }

    static fromDatabaseSnapshot(snapshot) {
        return Database.instance.get(`labs/${snapshot.key}`).then(lab => new LabReview({
            lab: Lab.fromDatabaseSnapshot(lab),
            // comments:
        }));
    }

    static fromDatabaseArraySnapshot(snapshot) {
        const reviews = databaseSnapshotToArray(snapshot).map(review => LabReview.fromDatabaseSnapshot(review));
        return Promise.all(reviews);
    }
}
