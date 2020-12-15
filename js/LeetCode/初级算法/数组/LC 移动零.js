/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let count=0;
    // while(nums.indexOf(0)>=0){
    //     nums.splice(nums.indexOf(0),1);
    //     count++;
    // }
    // for(let i=0;i<count;i++){
    //     nums.push(0);
    // }

    // if(nums===null||nums.length===0){
    //     return;
    // }
    // let index=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]!==0){
    //         nums[index++]=nums[i];
    //     }
    // }
    // while(index<nums.length){
    //     nums[index++]=0;
    // }

    let i=0;//i统计前面0的个数，也等于两个指针之间的距离
    for(let j=0;j<nums.length;j++){
        if(nums[j]===0){
            i++;
        }else if(i!==0){
            nums[j-i]=nums[j];
            nums[j]=0;
        }
    }
};
let test = [];
test.push([0,1,0,3,12]);

for(const value of test){
    console.log(moveZeroes(value));
    console.log(value);
}
