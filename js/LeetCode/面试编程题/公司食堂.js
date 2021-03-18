var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdouta
});
let input = null;
rl.on('line', line => {
    let T = 0;
    if (typeof line === 'number') {
        T = line;
    } else {
        console.log('input param T error!')
    }
    rl.on('line', line => {
        let N = 0;
        if (typeof line === 'number') {
            N = line;
        } else {
            console.log('input param N error!')
        }
        rl.on('line', line => {
            
        });
    });
});

function tellSeat(N, usedString, M, maleFemaleString) {

}
