/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const map = new Map();
    for (let x of s) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    for (let x of t) {
        if (map.has(x)) {
            if (map.get(x) === 1) {
                map.delete(x)
            } else {
                map.set(x, map.get(x) - 1);
            }
        } else {
            return false;
        }
    }
    return map.size <= 0;
};

let test = [];
test.push(["anagram", "nagaram"]);
test.push(["rat", "car"]);
test.push(["sii", "isi"]);

for (const value of test) {
    console.log(isAnagram(...value));
}
