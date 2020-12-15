"use strict";

const object={
    name:"hxh",
    age:22,
};
object.sex='male';
console.log(object);

const s=new Set(['val1','val2','val3']);
console.log(s.values===s.keys);

let arr1=[1,2,3];
let arr2=[...arr1];
console.log(arr1);
console.log(arr2);
console.log(arr1===arr2);

let map1=new Map([[1,2],[3,4],[5,6]]);
let map2=new Map(map1);
console.log(map1);
console.log(map2);
console.log(map1===map2);
