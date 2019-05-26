import {storage} from "firebase/app";
import 'firebase/storage';
import {FirebaseModule} from "./firebase-module";

export class Storage extends FirebaseModule {
    constructor({user}) {
        super();
        this.storage = storage().ref('/' + user.uid);
    }

    destroy() {
        super.destroy();
        this.storage = null;
    }

    upload(file, basePath = '') {
        const path = this._referencePathWithBasePath(basePath, `${Date.now()}/${file.name}`);
        return this.storage.child(path).put(file)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(downloadUrl => ({downloadUrl}));
    }

    _referencePathWithBasePath(basePath, path) {
        if (!basePath) return path;
        return `${basePath}/${path}`;
    }
}
