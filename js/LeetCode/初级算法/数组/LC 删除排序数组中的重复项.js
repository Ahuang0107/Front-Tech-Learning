/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0,len=nums.length;
    while(i<len){
        if(nums[i]===nums[i+1]){
            nums.splice(i+1,1);
            len--;
        }else{
            i++;
        }
    }
    return nums.length;
};

let test = [];
test.push([1,1,2]);
test.push([0,0,1,1,1,2,2,3,3,4]);

for(const value of test){
    console.log(removeDuplicates(value));
}
