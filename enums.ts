// enum RoleExampleOne {
//   ADMIN = 100,
//   READ_ONLY,
//   AUTHOR,
// }

// enum RoleExampleTwo {
//   ADMIN = 'Admin',
//   READ_ONLY = 'Read Only',
//   AUTHOR = 'Author',
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const personThree: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Jay',
  age: 27,
  hobbies: ['Swimming', 'Cricket'],
  role: Role.READ_ONLY,
};

console.log(personThree.role);
