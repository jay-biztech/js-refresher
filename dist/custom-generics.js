"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: 'Jay', hobbies: ['Swimming'] }, { age: 27 });
console.log(mergedObject.age);
function countAndDescribe(element) {
    let description = 'Got no value';
    if (element.length === 1) {
        description = 'Got 1 element.';
    }
    else if (element.length > 1) {
        description = `Got ${element.length} elements.`;
    }
    return [element, description];
}
console.log(countAndDescribe('Hi there!!'));
console.log(countAndDescribe(['Sports', 'Reading']));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Jay' }, 'name');
//# sourceMappingURL=custom-generics.js.map