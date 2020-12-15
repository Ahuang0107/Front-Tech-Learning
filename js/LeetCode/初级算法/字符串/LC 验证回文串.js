/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // const copy = Array();
    // for (let i = 0; i < s.length; i++) {
    //     let x = s.charCodeAt(i);
    //     if ((x >= 48 && x <= 57) || (x >= 97 && x <= 122) || (x >= 65 && x <= 90)) {
    //         copy.push(s[i].toLowerCase());
    //     }
    // }
    // return copy.toString()===copy.reverse().toString();

    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !isRuledChar(s[left])) {
            left++;
        }
        while (left < right && !isRuledChar(s[right])) {
            right--;
        }
        if (left <= right) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};

function isRuledChar(s) {
    return ((s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57)
        || (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
        || (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122));
}

let test = [];
test.push("A man, a plan, a canal: Panama");
test.push("race a car");
test.push("a.");

for (const value of test) {
    console.log(isPalindrome(value));
}
