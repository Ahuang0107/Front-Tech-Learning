"use strict";

let string='abc';
console.log(string[Symbol.iterator]);
console.log(string[Symbol.iterator]());
let iter=string[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

