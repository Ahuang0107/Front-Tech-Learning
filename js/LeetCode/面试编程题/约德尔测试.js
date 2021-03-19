const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputLineNum=2;
let input=[]
rl.on('line',(line)=>{
    input.push(line);
    if(input.length===inputLineNum){
        let historyArray=input[0].split('');
        let solarArray=input[1].split('');
        let len=historyArray.length;
        let correct=0;
        let transformHistoryString=historyArray.map(e=>{
            if(/[a-zA-Z0-9]/.test(e)){
                return 1
            }else{
                return 0
            }
        })
        transformHistoryString.forEach((element,index)=> {
            if (solarArray[index] == element) {
                correct++;
            }
        })
        let percentage=((correct/len)*100).toFixed(2);
        console.log(percentage+'%')
        rl.close();
    }
})
