/**
 * @param {number} n
 * @return {number}
 * 先把要查看的n以下每个数字都标记为质数，然后从小到大遍历（从2开始），如果是质数，则它的1倍，2倍，3倍等都是合数
 * 都需要修改标记为合数
 * 事实上只需要从这个质数的平方开始修改标记，因为如果它的2倍到平方之间的合数已经在之前的遍历中被识别了
 */
var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            ans++;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};

let test = [];
test.push(10);
test.push(0);
test.push(1);
test.push(2);
test.push(3);
test.push(499979);
test.push(5e6);

for (const value of test) {
    console.log(countPrimes(value));
}
