import {database} from "firebase/app";
import 'firebase/database'
import {FirebaseModule} from "./firebase-module";

export class Database extends FirebaseModule {
    constructor() {
        super();
        this.database = database();
    }

    push(path, payload) {
        return this.database.ref(path).push(payload);
    }

    listen(path, listener) {
        this.database.ref(path).on('value', listener)
    }

    stopListening(path, listener) {
        this.database.ref(path).off('value', listener);
    }

    get(path) {
        return this.database.ref(path).once('value');
    }
}
