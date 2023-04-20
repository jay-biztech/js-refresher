"use strict";
const add = (...numbers) => numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
const addWithFixedParams = (...numbers) => numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
const addedNumbers = add(2, 3, 4, 5, 6);
console.log(addedNumbers);
const addedWithFixedParams = addWithFixedParams(2, 3, 4);
console.log(addedWithFixedParams);
//# sourceMappingURL=rest-params.js.map