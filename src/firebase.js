import {initializeApp} from 'firebase/app';
import {Auth} from "./firebase/auth";
import {Database} from "./firebase/database";

initializeApp({
    apiKey: "AIzaSyCZKOYcaGbedadVysFQDfCq5OlJftxI4WE",
    authDomain: "pkmapp-dcd0c.firebaseapp.com",
    databaseURL: "https://pkmapp-dcd0c.firebaseio.com",
    projectId: "pkmapp-dcd0c",
    storageBucket: "pkmapp-dcd0c.appspot.com",
    messagingSenderId: "575259586868",
    appId: "1:575259586868:web:eadae60bd4ea16cd"
});

Auth.initialize();
Database.initialize();
