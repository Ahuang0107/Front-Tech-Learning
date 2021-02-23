const chinesePattern = /[\u4e00-\u9fa5]+/g;
const englishPattern = /[a-zA-Z]+/g;
const Pattern=/([\u4e00-\u9fa5]+)\(([a-zA-Z\s]+)\)/g;
const str = '黄鑫辉(Elase Huang)';
console.log(str.match(chinesePattern));
console.log(str.match(englishPattern));
console.log(str.match(Pattern));
