"use strict";

let num = 0;
outermost:
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i === 5 && j === 5) {
                break outermost;//55，直接跳出打标签的循环，后面都不执行
                // continue outermost;//95,有一次会跳出内层循环，少5此内层循环
            }
            num++;
        }
    }
console.log(num);

let name2 = new String('mstt');
name2.age=27;
name2.sex='male';
let name3 = 'mstt';
console.log(name2);
console.log(name3);

let obj1={};
let obj2=obj1;
obj1.name='Nicholas';
console.log(obj2);

function setName(obj){
    obj.name='Nicholas';
    obj=new Object();
    obj.name='Greg';
}
let person=new Object();
setName(person);
console.log(person);

// function buildUrl(){
//     let qs="?debug=true";
//     with(loaction){
//         let url=href+qs;
//     }
//     return url;
// }


