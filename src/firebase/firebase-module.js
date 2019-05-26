export class FirebaseModule {
    static instance;

    static initialize() {
        this.instance = new this(...arguments);
    }

    destroy() {}
}
