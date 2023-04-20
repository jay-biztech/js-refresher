function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion == 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);

const combinedNames = combine('Jay', 'Parmar', 'as-text');
console.log(combinedNames);
