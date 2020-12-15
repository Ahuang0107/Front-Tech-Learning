/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let string=s.trim();
    // if(string.match(/[-+]?[0-9]+/)){
    //     let number=string.match(/[-+]?[0-9]+/)[0];
    //     if(string.startsWith(number)){
    //         if(number<(-1*2**31)){
    //             return -1*2**31;
    //         }else if(number>(2**31-1)){
    //             return 2**31-1;
    //         }else{
    //             return number;
    //         }
    //     }else{
    //         return 0;
    //     }
    // }
    // return 0;

    if(string.length===0)   return 0;

};

let test = [];
test.push("42");
test.push("   -42");
test.push("4193 with words");
test.push("words and 987");
test.push("-91283472332");

for (const value of test) {
    console.log(myAtoi(value));
}
