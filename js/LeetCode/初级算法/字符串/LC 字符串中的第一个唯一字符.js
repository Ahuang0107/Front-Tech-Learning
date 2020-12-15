/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i],true);
        }else{
            map.set(s[i], false);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if(!map.get(s[i])){
            return i;
        }
    }
    return -1;
};

let test = [];
test.push("leetcode");
test.push("loveleetcode");
test.push("");

for (const value of test) {
    console.log(firstUniqChar(value));
}
