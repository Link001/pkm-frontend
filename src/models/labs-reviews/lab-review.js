import {Database} from "../../firebase/database";
import {databaseSnapshotToArray} from "../../helpers";
import {Lab} from "../lab";
import {ReviewComment} from "./review-comment";

export class LabReview {
    constructor({ lab, comments, reportUrl }) {
        this.lab = lab;
        this.comments = comments;
        this.reportUrl = reportUrl;
    }

    static fromDatabaseSnapshot(snapshot) {
        return  Promise.all([
            Database.instance.get(`labs/${snapshot.key}`).then(lab => Lab.fromDatabaseSnapshot(lab)),
            ReviewComment.fromDatabaseArraySnapshot(snapshot.child('comments'))
        ])
            .then(([lab, comments]) => new LabReview({
                lab,
                comments,
                reportUrl: snapshot.child('reportUrl').val()
            }));
    }

    static fromDatabaseArraySnapshot(snapshot) {
        const reviews = databaseSnapshotToArray(snapshot).map(review => LabReview.fromDatabaseSnapshot(review));
        return Promise.all(reviews);
    }
}
