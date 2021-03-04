class Test{
    static stringToParamArray(filterParams){
        let result=[];
        filterParams.match(/[^,]+/g).forEach(paramName=>{
            result.push(paramName);
        })
        return result;
    }
}
let str2="(127012)深交所,(127012)深交所综合协议平台,(150245)上交所固定收益平台";
let result=Test.stringToParamArray(str2);
console.log(result);
let result2=[]
for(let x of result){
    let temp=x.match(/([^\(\)]+)/g)
    result2.push({code:temp[0],name:temp[1]})
}
console.log(result2);
