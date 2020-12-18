"use strict";

let array=Array(4294967296-1);
let object={
    name:'hxh',
    age:22
}
// object=null;
console.log(object.valueOf());//{ name: 'hxh', age: 22 }
console.log(Number(object));//NaN
console.log(object&&12);//12
console.log(1&&object);//{ name: 'hxh', age: 22 }
console.log(12&&object);//{ name: 'hxh', age: 22 }
console.log(0&&object);//0
console.log(true&&object);//{ name: 'hxh', age: 22 }
console.log(array&&object);//{ name: 'hxh', age: 22 }

let number=32;
Number.isInteger(number);
