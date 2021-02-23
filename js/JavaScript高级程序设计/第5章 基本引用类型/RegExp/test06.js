class Test{
    static stringToParamObject(filterParams){
        let result={};
        filterParams.match(/[^,]+/g).forEach(paramKeyAndValue=>{
            let keyAndValue=paramKeyAndValue.match(/[^=]+/g);
            result[keyAndValue[0]]=keyAndValue[1];
        })
        return result;
    }
}
let str="交易方式=逆回购,业务类型2=到期";
let str2="(127012)深交所,(127012)深交所综合协议平台,(150245)上交所固定收益平台";
let result=Test.stringToParamObject(str2);
console.log(result);
for(let x in result){
    console.log(x);
    console.log(result[x]);
}
