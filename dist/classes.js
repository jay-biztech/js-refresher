"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.hobbies = [];
        this.name = name;
    }
    describe() {
        console.log(`Person: ${this.id} ${this.name}`);
    }
    addHobbies(hobby) {
        this.hobbies.push(hobby);
    }
    printHobbies() {
        console.log(this.hobbies.length);
        console.log(this.hobbies);
    }
}
class Student extends Person {
    constructor(id, teachers) {
        super(id, 'Student');
        this.teachers = teachers;
        this.teachers = teachers;
    }
}
const student = new Student('P1', ['T1']);
student.describe();
console.log(student);
//# sourceMappingURL=classes.js.map