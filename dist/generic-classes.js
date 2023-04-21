"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Jay');
textStorage.addItem('Kishan');
console.log(textStorage.getItems());
textStorage.removeItem('Kishan');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
numberStorage.removeItem(2);
console.log(numberStorage.getItems());
//# sourceMappingURL=generic-classes.js.map