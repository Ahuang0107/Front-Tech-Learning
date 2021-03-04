//保留n位小数
function roundFun(value, n) {
    return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
}
//保留n位小数并格式化输出（不足的部分补0）
var fomatFloat = function(value, n) {
    var f = Math.round(value*Math.pow(10,n))/Math.pow(10,n);
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        s += '.';
    }
    for(var i = s.length - s.indexOf('.'); i <= n; i++){
        s += "0";
    }
    return s;
}

console.log(fomatFloat(1.234,2))
console.log(fomatFloat(1.23465,6))
console.log(1.23000)
