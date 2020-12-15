const str = "Is is the cost of of gasoline going up up";
const pattern1 = /\b([a-z]+) \1\b/ig;
console.log(str.match(pattern1));
const str2 = "http://www.runoob.com:80/html/html-tutorial.html";
const pattern2 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
// arr = str2.match(pattern2);
arr = pattern2.exec(str2);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(pattern1.flags);
console.log(pattern1.valueOf());
console.log(pattern1.toLocaleString());

let falseObject = new Boolean(false);
let trueBoolean = true;
console.log(falseObject instanceof Boolean);
console.log((typeof trueBoolean) === 'boolean');
