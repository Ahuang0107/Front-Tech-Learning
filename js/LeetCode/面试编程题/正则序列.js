var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdouta
});
rl.on('line', function(line){
    const line1 = line.split(' ');
    let n=parseInt(line1[0]);
    rl.on('line', function(line){
        const line2 = line.split(' ');
        let arr=line2.map(i=>parseInt(i));
        findTimes(n,arr);
    });
});
function findTimes(n,arr){
    let len=arr.length;
    let count=0;
    arr.forEach((element,index,array)=>{
        if(element<0){
            count+=-element;
            array[index]=0;
        }
    })
    arr.sort((a,b)=>a>b?1:-1);
    let left=0;
    while(left<len){
        if(arr[left]<(left+1)){
            count+=(left+1)-arr[left];
        }else if(arr[left]>(left+1)){
            count+=arr[left]-(left+1);
        }
        left+=1;
    }
    console.log(count);
}
