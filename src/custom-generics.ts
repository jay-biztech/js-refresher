function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge<
  { name: string; hobbies: string[] },
  { age: number }
>({ name: 'Jay', hobbies: ['Swimming'] }, { age: 27 });
console.log(mergedObject.age);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length === 1) {
    description = 'Got 1 element.';
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }

  return [element, description];
}

console.log(countAndDescribe('Hi there!!'));
console.log(countAndDescribe(['Sports', 'Reading']));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Jay' }, 'name');
