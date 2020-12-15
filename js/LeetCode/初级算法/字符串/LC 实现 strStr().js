/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<=haystack.length-needle.length;i++){
        if(haystack.slice(i).startsWith(needle)){
            return i;
        }
    }
    return -1;
};

let test = [];
test.push(["hello", "ll"]);
test.push(["aaaaa", "bba"]);
test.push(["", ""]);
test.push(["a", "a"]);
test.push(["abc", "c"]);

for (const value of test) {
    console.log(strStr(...value));
}
