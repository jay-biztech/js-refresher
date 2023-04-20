interface Greetable {
  firstName: string;
  greet(phrase: string): void;
}

class PersonI implements Greetable {
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.firstName}`);
  }
}

let user1: Greetable;

user1 = new PersonI('Jay');
user1.greet('Hi there I am');
