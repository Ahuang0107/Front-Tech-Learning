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


