console.log(sub(10,10));
function sub(a,b){
    return a-b;
}
console.log(add(10,10));
var add=function add(a,b){
    return a+b;
}
console.log(sum(10,10));
let sum=function sum(a,b){
    return a+b;
}
/*
函数声明是可以提升的，但是指向函数的变量声明前是不能调用的，不管书let声明的还是var声明的。
 */
