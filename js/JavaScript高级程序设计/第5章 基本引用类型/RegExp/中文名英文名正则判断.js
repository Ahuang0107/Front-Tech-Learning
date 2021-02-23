const chineseNamePattern= /^(?:[\u4e00-\u9fa5]+)(?:·[\u4e00-\u9fa5]+)*$/
const englishNamePattern= /^[a-zA-Z0-9]+\s?[\.·\-\s()a-zA-Z]*[a-zA-Z]+$/
const str3="Frank MZ Wang";
console.log(englishNamePattern.test(str3));
