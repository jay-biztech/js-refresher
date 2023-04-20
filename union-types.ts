function combine(input1: string | number, input2: string | number) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Jay', 'Parmar');
console.log(combinedNames);
