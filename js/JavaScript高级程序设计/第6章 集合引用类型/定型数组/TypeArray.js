"use strict";

const ints3 = new Int32Array([2, 4, 6, 2 ** 31 - 1]);
console.log(ints3.length);
console.log(ints3.buffer.byteLength);
console.log(ints3[3]);

const ints4 = new Int16Array(ints3);
console.log(ints4.length);
console.log(ints4.buffer.byteLength);
console.log(ints4[3]);

console.log(Int32Array.BYTES_PER_ELEMENT);
console.log(Int16Array.BYTES_PER_ELEMENT);
