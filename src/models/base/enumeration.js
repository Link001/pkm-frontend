export class Enumeration {
    constructor(value) {
        this.value = value;
    }

    is(value) {
        return this.value === value;
    }
}
