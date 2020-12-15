/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map=new Map(),
        result=[];
    for(let x of (nums1.length>nums2.length?nums2:nums1)){
        if(map.has(x)){
            map.set(x,map.get(x)+1);
        }else{
            map.set(x,1);
        }
    }
    // console.log(map);
    for(let x of (nums1.length>nums2.length?nums1:nums2)){
        if(map.has(x)){
            if(map.get(x)>0){
                map.set(x,map.get(x)-1);
                result.push(x);
            }
        }
    }
    return result;
};
let test = [];
test.push([[1,2,2,1],[2,2]]);
test.push([[4,9,5],[9,4,9,8,4]]);
test.push([[1,2,2,1],[2]]);

for(const value of test){
    console.log(intersect(...value));
}
