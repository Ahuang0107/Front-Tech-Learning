/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev=0;
    let flag=true;
    if(x<0){
        flag=false;
    }
    x=Math.abs(x);
    while(x!==0){
        let pop=x%10;
        x=Math.floor(x/10);
        rev=rev*10+pop;
        if(rev>(2**31-7)){
            return 0;
        }
    }
    return flag?rev:rev*-1;
};

let test = [];
test.push(123);
test.push(-123);
test.push(120);
test.push(2**31-1);
test.push(2**31-1-1);
test.push(-1*2**31);
test.push(-1*2**31+1);

for(const value of test){
    console.log(reverse(value));
}
