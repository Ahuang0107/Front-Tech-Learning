const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let input = null;
rl.on('line', line => {
    let n = parseInt(line);//user number
    console.log('n=', n);
    rl.on('line', line => {
        let lines = line.split(' ');
        let favArray = lines.map(e => parseInt(e));//each user favour point k
        console.log('favArray=', favArray);
        rl.on('line', line => {
            let q = parseInt(line);//query group number
            console.log('q=', q);
            for (let i = 0; i < q; i++) {
                rl.on('line', line => {
                    lines = line.split(' ');
                    let [l, r, k] = [...lines];//query start l,end r and target k
                    console.log('l,r,k=', l, r, k);
                })
            }
        })
    })
})
