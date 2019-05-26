import {firebaseReferenceToArray} from "../helpers";

export class Lab {
    constructor({ id, name, taskDocumentUrl }) {
        this.id = id;
        this.name = name;
        this.taskDocumentUrl = taskDocumentUrl;
    }

    static fromDatabaseSnapshot(snapshot) {
        return new Lab({
            id: snapshot.key,
            name: snapshot.child('name').val(),
            taskDocumentUrl: snapshot.child('taskDocumentUrl').val()
        });
    }

    static fromDatabaseArraySnapshot(snapshot) {
        return firebaseReferenceToArray(snapshot).map(lab => Lab.fromDatabaseSnapshot(lab));
    }
}
