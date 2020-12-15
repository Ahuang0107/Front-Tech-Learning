function aFunction(a,b,argument){
    console.log(a);
    console.log(b);
    console.log(argument);
}
let arg=[12,45,78,90,120];
aFunction(...arg);
aFunction(...arg);

let array=Array.of(...arg);
console.log(...arg);
console.log(array);

let string='123';
// console.log(Array.prototype.shift().call(string));
console.log(string);
string='234';
string[0]='0'
console.log(string);
