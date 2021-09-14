/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = function(nums, target) {
    let left=0,right=nums.length-1
    let i=((left+right)/2)%1
    let find=i
    while(left<right){
        if(nums[i]===target){
            return i
        }else if(nums[i]>target){
            right=i
        }else{
            left=i
        }
        i=((left+right)/2)%1
    }
};
