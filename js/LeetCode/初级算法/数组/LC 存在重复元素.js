/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;

    // let array=nums;
    // array.sort();
    // for(let i=0;i<nums.length;i++){
    //     if(array[i]===array[i+1]){
    //         return true;
    //     }
    // }
    // return false;
};

let test = [];
test.push([1,2,3,1]);
test.push([1,2,3,4]);
test.push([1,1,1,3,3,4,3,2,4,2]);

for(const value of test){
    console.log(containsDuplicate(value));
}
