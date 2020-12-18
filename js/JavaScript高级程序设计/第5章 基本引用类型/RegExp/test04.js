"use strict";
let outer = function () {
    let name = 'Jake';
    return function () {
        return name;
    };
};

console.log(outer());

let stringValue = 'hello world!';
console.log(stringValue.length);//12
console.log(stringValue.slice(0, 3));//hel
console.log(stringValue.slice(4, 6));//o
console.log(stringValue.slice(-5, 10));//orl
console.log(stringValue.slice(0, -1));//hello world

let text = 'cat,bat,sat,fat,eat,zat,pat,wat,rat,gat,dat,jat';
console.log(text.replace(/(.at)/g, 'word($1)'))

console.log("<p class=\"greeting\">Hello World!</p>".replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
        case "<":
            return "&lt;";
        case ">":
            return "&gt;";
        case "&":
            return "&amp;";
        case "\"":
            return "&quot;";
    }
}))

let uri="http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
console.log(decodeURI(uri));
console.log(decodeURIComponent(uri));
