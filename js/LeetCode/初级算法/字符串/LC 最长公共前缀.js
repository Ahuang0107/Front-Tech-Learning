/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b)=>a.length-b.length);
    let sample=strs[0];
    if(sample){
        for(let i=0;i<sample.length;i++){
            for(let j=1;j<strs.length;j++){
                if(sample[i]!==strs[j][i]){
                    return sample.slice(0,i);
                }
            }
        }
        return sample;
    }else{
        return ''
    }
};

let test = [];
test.push(["flower","flow","flight"]);
test.push(["dog","racecar","car"]);
test.push(["dog","dog","dog"]);
test.push(["dog","","dog"]);

for(const value of test){
    console.log(longestCommonPrefix(value));
}
