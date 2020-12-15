/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let numberString='1';
    let output;
    let array=[];
    for(let i=1;i<n;i++){
        do{
            output=toAppearanceArray(numberString);
            array.push(output[0],output[1]);
            numberString=output[2];
        }while(numberString!=='')
        numberString=''.concat(...array);
        array=[];
    }
    return numberString;
};

/**
 * @param {string} input
 * @return {Array}
 */
function toAppearanceArray(input){
    let index=1,count=1;
    while(input[index]===input[0]){
        count++;
        index++;
    }
    if(index>input.length-1){
        return [input[0], count, ''];
    }else{
        return [input[0], count, input.slice(index)];
    }
}

let test = [];
test.push(1);
test.push(2);
test.push(3);
test.push(4);

for (const value of test) {
    console.log(countAndSay(value));
}
