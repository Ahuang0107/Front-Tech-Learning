/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let res = [0, 1];
    if (n >= 2) {
        for (let i = 2; i <= n; i++) {
            let plus = res[i - 1] + res[i - 2];
            if (plus > (1e9 + 7)) {
                plus %= (1e9 + 7);//为什么边算边取余跟一起算完再取余结果是不同的？
            }
            res.push(plus);
        }
        // console.log(res);
    }
    return res[n] % (1e9 + 7);
};

let test = [];
test.push(2);
test.push(5);
test.push(6);
test.push(9);
test.push(81);

for (const value of test) {
    console.log(fib(value));
}
