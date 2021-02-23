let str=".pdf,.xls,.xlsx,.doc,.docx"
const filePattern = /([^,.]+)/g;
console.log(str.match(filePattern));
