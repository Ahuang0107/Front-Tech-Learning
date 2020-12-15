/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s.reverse();
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }
};


let test = [];
test.push(["h","e","l","l","o"]);
test.push(["H","a","n","n","a","h"]);

for(const value of test){
    console.log(reverseString(value));
}
