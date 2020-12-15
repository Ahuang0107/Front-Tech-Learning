"use strict";

let params = [3, 4, 5];

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

console.log(sum(...params));
console.log(sum.apply(undefined, params))

function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}

function restParamaterFunction2(x, y) {
    let a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, 'hello', true, 7));
console.log(restParamaterFunction2(1, 2, 'hello', true, 7));

let hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello());


