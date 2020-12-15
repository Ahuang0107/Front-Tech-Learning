/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single=0;
    for(let x of nums){
        single^=x;
    }
    return single;
};
let test = [];
test.push([2,2,1]);
test.push([4,1,2,1,2]);
test.push([3,6,3,4,8,2,8,4,6]);

for(const value of test){
    console.log(singleNumber(value));
}
