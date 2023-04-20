const personDetails: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Jay',
  age: 27,
  hobbies: ['Swimming', 'Cricket'],
};

for (const hobby of personDetails.hobbies) {
  console.log(hobby.toUpperCase());
}
