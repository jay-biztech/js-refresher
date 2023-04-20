const personHobbies = ['Swimming', 'Cricket', 'Playing Piano'];

const [hobby1, hobby2, ...remainingHobbies] = personHobbies;
console.log(hobby1);
console.log(remainingHobbies);

const personDetails = {
  firstName: 'Jay',
  age: 27,
};

const { firstName: userName, age } = personDetails;
console.log(userName, age);
