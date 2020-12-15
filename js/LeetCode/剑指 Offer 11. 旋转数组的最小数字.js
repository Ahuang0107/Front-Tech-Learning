/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if(numbers.length<2) return numbers[0];
    let left=0,right=numbers.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(numbers[mid]>numbers[right]){
            left=mid+1;
        }else if(numbers[mid]<numbers[right]){
            right=mid;
        }else{
            right--;
        }
    }
    return numbers[left];
};

let test = [];
test.push([3,4,5,1,2]);
test.push([2,2,2,0,1]);
test.push([1,1,1,1,1,1]);
test.push([1,1,1,1,1,2,3,0,1]);
test.push([1,1,1,0,0,1]);
test.push([1,0,0,0,0,1]);
test.push([1,0,0,0,0,0]);
test.push([1,2,3,4,5]);
test.push([]);

for (const value of test) {
    console.log(minArray(value));
}
