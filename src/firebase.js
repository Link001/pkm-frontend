import {database, initializeApp} from 'firebase';
import 'firebase/database';

export function initializeFirebase() {
    initializeApp({
        apiKey: "AIzaSyCZKOYcaGbedadVysFQDfCq5OlJftxI4WE",
        authDomain: "pkmapp-dcd0c.firebaseapp.com",
        databaseURL: "https://pkmapp-dcd0c.firebaseio.com",
        projectId: "pkmapp-dcd0c",
        storageBucket: "pkmapp-dcd0c.appspot.com",
        messagingSenderId: "575259586868",
        appId: "1:575259586868:web:eadae60bd4ea16cd"
    })
}

export class Database {
    static push(path, payload) {
        return database().ref(path).push(payload);
    }

    static listen(path, listener) {
        database().ref(path).on('value', listener)
    }

    static stopListening(path, listener) {
        database().ref(path).off('value', listener);
    }
}
