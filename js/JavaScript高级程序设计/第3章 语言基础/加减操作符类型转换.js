"use strict";

let o={};//new Object()
o['name']='hxh';
o.age=22;
console.log(o);
console.log(o.hasOwnProperty('name'));
console.log(o.hasOwnProperty('sex'));
console.log(o.toLocaleString());
console.log(o.valueOf());
console.log(NaN.toString());
console.log(o--);
// console.log(NaN++);//NaN

let obj={
    valueOf (){
        return -1;
    }
}
console.log(--obj);
console.log(obj--);
console.log(+obj);
console.log(-obj);

console.log(+false);
console.log(-false);
console.log(+true);
console.log(-true);
console.log((-false)===(+false));

let num=-18;
console.log(num.toString(2));
console.log((-25)&3);
console.log(25&3);
console.log((-25)|3);
console.log(25|3);
console.log((-25)^3);
console.log(25^3);
console.log(-64>>>5);

