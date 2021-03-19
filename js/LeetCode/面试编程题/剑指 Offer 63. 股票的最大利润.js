/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Number.MAX_VALUE;
    let dpMax = 0;
    for (let price of prices) {
        dpMax = Math.max(dpMax, (price - minPrice));
        minPrice = Math.min(minPrice, price);
    }
    return dpMax;
};

let testList = [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1]
]

for (let x of testList) {
    console.log(maxProfit(x))
}
