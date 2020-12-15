/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let stack=[];
    let count=0;
    for(let i=0;i<hours.length;i++){
        for(let j=i;j<hours.length;j++){
            if(hours[j]>8){
                stack.push(1);
            }else{
                stack.pop();
            }
            if(stack.length<1){
                if(count<(j-i)){
                    count=j-i;
                }
                break;
            }
        }
    }
    return count;
};

let test = [];
test.push([9,9,6,0,6,6,9]);
test.push([9,9,6,9,0,9,6,6,9]);
test.push([6,6,9]);

for(const value of test){
    console.log(longestWPI(value));
}
