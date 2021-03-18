"use strict";

function oldFib(n) {
    if (n < 2) {
        return n;
    }
    return oldFib(n - 1) + oldFib(n - 2);
}
// fib(4)==3
function fib(n) {
    return fibImpl(0, 1, n);
}

function fibImpl(a, b, n) {
    if (n === 0) {
        return a;
    }
    return fibImpl(b, a + b, n - 1);
}

let testData = 30;//30分水岭

let start = new Date();
console.log(fib(testData));
let end = new Date();
console.log(end - start);

start = new Date();
console.log(oldFib(testData));
end = new Date();
console.log(end - start);
