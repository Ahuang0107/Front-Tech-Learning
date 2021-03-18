var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let linesNum = 2;
let rows = [];
rl.on('line', function (line) {
    rows.push(line);
    if(linesNum==rows.length){
        let params = rows[0].split(' ');
        let n = parseInt(params[0]);
        let x = parseInt(params[1]);
        let y = parseInt(params[2]);
        params = rows[1].split(' ');
        let arr = params.map(i => parseInt(i));
        findM(n, x, y, arr);
    }
});

function findM(n, x, y, arr) {
    let result = -1;
    let len = arr.length;
    arr.sort((a, b) => a < b ? 1 : -1);
    for (let i = x; i <= y; i++) {
        let j = n - i;
        if (j >= x && j <= y) {
            if (i < len) {
                result = arr[i];
            }
        }
    }
    console.log(result);
    return result;
}

// let test = [];
// test.push([6,2,3,[4,5,2,1,6,3]]);
// test.push([4,2,3,[117,195,962,512]]);
//
// for(const value of test){
//     console.log(findM(...value));
// }
