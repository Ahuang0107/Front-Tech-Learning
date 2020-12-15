/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k=k%nums.length;
    nums.reverse();
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

    // for(let i=0;i<k;i++){
    //     nums.unshift(nums.pop());
    // }

    // let temp=undefined;
    // for(let i=0;i<k;i++){
    //     temp=nums.splice(nums.length-1,1);
    //     nums.splice(0,0,temp[0]);
    // }
    return nums;
};
function reverse(array,start,end){
    while(start<end){
        let temp=array[start];
        array[start]=array[end];
        array[end]=temp;
        start++;
        end--;
    }
}

let test = [];
test.push([[1,2,3,4,5,6,7],3]);
test.push([[-1,-100,3,99],2]);
test.push([[-1],2]);

for(const value of test){
    console.log(rotate(...value));
}
