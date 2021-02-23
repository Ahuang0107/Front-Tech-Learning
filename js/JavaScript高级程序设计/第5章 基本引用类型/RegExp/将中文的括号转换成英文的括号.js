// 将中文的括号转换成英文的
function transformBracket(str){
    const reg = /[\（]/g, reg2 = /[\）]/g;
    return str.replace(reg,"(").replace(reg2,")");;
}

console.log(transformBracket("估价净价（中债）"))
