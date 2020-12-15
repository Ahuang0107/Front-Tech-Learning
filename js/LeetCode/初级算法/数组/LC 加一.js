/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits){
    // let result=1,
    //     len=digits.length-1;
    // for(const [index,value] of digits.entries()){
    //     result+=Math.floor(value*(10**(len-index)));
    // }
    // return Array.from(result.toString());

    let len=digits.length-1;
    if(len===0&&digits[0]===9){
        return [1,0];
    }else if(digits[len]===9){
        digits[len]=0;
        return plusOne(digits.slice(0,len)).concat(0);
    }else{
        digits[len]++;
    }
    return digits;
};

let test = [];
test.push([1,2,3]);
test.push([4,3,2,1]);
test.push([0]);
test.push([0,0]);
test.push([4,3,9,9]);
test.push([9]);
test.push([9,9]);

for(const value of test){
    console.log(plusOne(value));
}
