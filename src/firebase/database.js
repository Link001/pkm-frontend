import {database} from "firebase/app";
import 'firebase/database'

export class Database {
    constructor() {
        this.database = database();
    }

    push(path, payload) {
        return this.database.ref(path).push(payload);
    }

    listen(path, listener) {
        this.database.ref(path).on('value', listener)
    }

    get(path) {
        return this.database.ref(path).once('value');
    }

    stopListening(path, listener) {
        this.database.ref(path).off('value', listener);
    }
}
