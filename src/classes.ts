class Person {
  private hobbies: string[] = [];

  constructor(private readonly id: string, private name: string) {
    this.name = name;
  }

  describe(this: Person) {
    console.log(`Person: ${this.id} ${this.name}`);
  }

  addHobbies(hobby: string) {
    this.hobbies.push(hobby);
  }

  printHobbies() {
    console.log(this.hobbies.length);
    console.log(this.hobbies);
  }
}

class Student extends Person {
  constructor(id: string, public teachers: string[]) {
    super(id, 'Student');
    this.teachers = teachers;
  }
}

const student = new Student('P1', ['T1']);
// student.addHobbies('Swimming');
// student.addHobbies('Reading');
// student.printHobbies();
student.describe();

console.log(student);

// const personCopy = { describe: person.describe };
// personCopy.describe();
