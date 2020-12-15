/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
    move(A.length,A,B,C);
    console.log(C);
};

function move(n,A,B,C){
    if(n===1){
        C.push(A.pop());
        return;
    }
    move(n-1,A,C,B);
    C.push(A.pop());
    move(n-1,B,A,C);
}

let test = [];
test.push([[2,1,0],[],[]]);
test.push([[1, 0],[],[]]);

for (const value of test) {
    hanota(value[0],value[1],value[2]);
}
