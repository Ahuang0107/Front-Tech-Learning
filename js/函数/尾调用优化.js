function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

let start=new Date();
fib(1000);
let end=new Date();
console.log(end-start);
