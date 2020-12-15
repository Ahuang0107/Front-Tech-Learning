/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // for(let x of nums){
    //     if(nums.includes(target-x)){
    //         if(x===(target/2)){
    //             if(nums.indexOf(x)===nums.lastIndexOf(x)){
    //                 continue;
    //             }
    //         }
    //         let result=[];
    //         result.push(nums.indexOf(x));
    //         result.push(nums.lastIndexOf(target-x));
    //         return result.sort((a,b)=>a-b);
    //     }
    // }

    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])].sort((a,b)=>a-b);
        }
        map.set(nums[i],i);
    }
    return [];
};
let test = [];
test.push([[2, 7, 11, 15], 9]);
test.push([[3,2,4], 6]);
test.push([[3,3], 6]);
test.push([[0,4,3,0], 0]);
test.push([[-1,-2,-3,-4,-5], -8]);

for (const value of test) {
    console.log(twoSum(...value));
}
