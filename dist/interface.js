"use strict";
class PersonI {
    constructor(firstName) {
        this.firstName = firstName;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.firstName}`);
    }
}
let user1;
user1 = new PersonI('Jay');
user1.greet('Hi there I am');
//# sourceMappingURL=interface.js.map