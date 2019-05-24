import {database, auth, initializeApp} from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

    static get(path) {
        return database().ref(path).once('value');
    }

    static stopListening(path, listener) {
        database().ref(path).off('value', listener);
    }
}

export class Auth {
    static MESSAGES = {
        'auth/user-not-found': "Не знайдено користувача з таким емейлом",
        "auth/wrong-password": 'Невірний пароль'
    };

    static signIn(email, password) {
        return auth()
            .signInWithEmailAndPassword(email, password)
            .catch(this.translateMessage.bind(this));
    }

    static fetchUserInformation({ user }) {
        return Database.get(`users/${user.uid}`).then((snapshot) => ({
            uid: user.uid,
            name: snapshot.child('name').val()
        }));
    }

    static signOut() {
        return auth().signOut();
    }

    static translateMessage({code, message}) {
        throw this.MESSAGES[code] || message;
    }
}
