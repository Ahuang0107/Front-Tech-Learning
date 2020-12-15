/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let string=n.toString(2);
    // console.log(string);
    let flag=false;
    let count=0,maxCount=0;
    for(let i=0;i< string.length;i++){
        if(string[i]==='1'&&flag===false){
            flag=true;
        }else if(string[i]==='0'&&flag===true){
            count++;
        }else if(string[i]==='1'&&flag===true){
            count++;
            if(count>maxCount){
                maxCount=count;
            }
            count=0;
        }
    }
    return maxCount;
};
let test = [];
test.push(22);
test.push(5);
test.push(6);
test.push(8);
test.push(1);
test.push(13);

for(const value of test){
    console.log(binaryGap(value));
}
