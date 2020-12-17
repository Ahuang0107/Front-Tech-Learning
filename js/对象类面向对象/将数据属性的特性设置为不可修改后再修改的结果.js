"use strict";
let person = {}
Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'Nicholas'
});
console.log(person.name);
person.name = 'abc';
console.log(person.name);
