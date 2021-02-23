var chinesePattern = /[\u4e00-\u9fa5]+/g;
var englishPattern = /[a-zA-Z]+/g;
var str = 'Elase黄Hu鑫辉a同学ng';
var result;
var msg='';
while ((result = chinesePattern.exec(str)) !== null) {
    msg+= result[0];
}
console.log(msg);
msg='';
while ((result = englishPattern.exec(str)) !== null) {
    msg+= result[0];
}
console.log(msg);
