"use strict";
function addI(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addI('Jay', 'PArmar');
//# sourceMappingURL=functional-overloading.js.map