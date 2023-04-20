const personTwo: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Jay',
  age: 27,
  hobbies: ['Swimming', 'Cricket'],
  role: [2, 'author'],
};

personTwo.role.push('admin');
