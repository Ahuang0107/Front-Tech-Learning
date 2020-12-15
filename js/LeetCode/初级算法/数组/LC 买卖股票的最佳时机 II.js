/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // console.log(prices);
    let get=prices[0],
        max=0;
    for(let i=1;i<prices.length;i++){
        if(get<prices[i]){
            max+=prices[i]-get;
            get=prices[i];
        }else{
            get=prices[i];
        }
    }
    return max;
};

let test = [];
test.push([7,1,5,3,6,4]);
test.push([1,2,3,4,5]);
test.push([7,6,4,3,1]);

for(const value of test){
    console.log(maxProfit(value));
}
