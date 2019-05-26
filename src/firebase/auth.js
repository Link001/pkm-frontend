import {auth} from "firebase/app";
import 'firebase/auth'
import {User} from "../models/user";
import {database} from "../firebase";

export class Auth {
    constructor() {
        this.auth = auth();
    }

    MESSAGES = {
        'auth/user-not-found': "Не знайдено користувача з таким емейлом",
        "auth/wrong-password": 'Невірний пароль',
        "auth/invalid-email": 'Не вірне форматування E-Mail. Приклад: example@mail.com'
    };

    signIn(email, password) {
        return this.auth
            .signInWithEmailAndPassword(email, password)
            .catch(this.translateMessage.bind(this));
    }

    autoSignIn() {
        return new Promise(resolve => {
            const unsubscribe = this.auth.onAuthStateChanged(user => {
                resolve(user);
                unsubscribe();
            });
        });
    }

    fetchUserInformation(user) {
        return database.get(`users/${user.uid}`)
            .then((snapshot) => User.fromDatabaseSnapshot(snapshot));
    }

    signOut() {
        return this.auth.signOut();
    }

    translateMessage({code, message}) {
        throw this.MESSAGES[code] || message;
    }
}
