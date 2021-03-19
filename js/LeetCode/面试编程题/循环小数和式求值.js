/*
题目给出的是整数、有限小数、无限循环小数组成的求和公式字符串，要求求出公式的结果并将公式转换成最简分数表示
例如：12+11.00+10.99+12.0014+12.14(35)
要求结果：12/1+11/1+1099/100+60007/5000+120221/9900=28776793/495000
 */
let formula = '12+11.00+10.99+12.0014+12.14(35)';

let decimalList = parseFormula(formula);
let sumFormula = '';
let sumFraction = toFractionalForm(toDecimalForm('0'))
for (let x of decimalList) {
    let fractionalForm = toFractionalForm(toDecimalForm(x))
    sumFormula += fractionalForm.numerator + '/' + fractionalForm.denominator + '+'
    sumFraction = fractionalAddFractional(fractionalForm, sumFraction)
}
console.log(sumFormula.slice(0, sumFormula.length - 1) + '=' + sumFraction.numerator + '/' + sumFraction.denominator)

function parseFormula(formulaString) {
    return formulaString.split('+');
}

function toDecimalForm(decimalString) {
    let obj = {};
    if (!decimalString.includes('.')) {
        obj.integerPart = parseInt(decimalString);
    } else if (!decimalString.includes('(')) {
        let temp = decimalString.split('.');
        obj.integerPart = temp[0];
        obj.decimalPart = temp[1];
    } else {
        let temp = decimalString.split('.');
        obj.integerPart = temp[0];
        let temp2 = temp[1].slice(0, temp[1].length - 1).split('(');
        obj.decimalPart = temp2[0];
        obj.circulationPart = temp2[1];
    }
    return obj;
}

function toFractionalForm(decimalObject) {
    if (!decimalObject.decimalPart) {
        return __integerToFraction(decimalObject)
    } else if (!decimalObject.circulationPart) {
        return __terminatingDecimalToFraction(decimalObject)
    } else {
        return __circulatingDecimalToFraction(decimalObject)
    }
}

function __integerToFraction(decimalObject) {
    let integerPart = decimalObject.integerPart;
    let result = {};
    result.numerator = parseInt(integerPart);
    result.denominator = 1;
    return result;
}

function __terminatingDecimalToFraction(decimalObject) {
    let integerPart = decimalObject.integerPart;
    let decimalPart = decimalObject.decimalPart;
    let decimalDigit = decimalPart.length;
    let result = {};
    let denominator = Math.pow(10, decimalDigit);
    result.numerator = parseInt(integerPart) * denominator + parseInt(decimalPart);
    result.denominator = denominator;
    let gcd = __divisionAlgorithm(result.denominator, result.numerator);
    result.numerator /= gcd;
    result.denominator /= gcd;
    return result;
}

function __circulatingDecimalToFraction(decimalObject) {
    let integerPart = decimalObject.integerPart;
    let decimalPart = decimalObject.decimalPart;
    let circulationPart = decimalObject.circulationPart;
    let decimalDigit = decimalPart.length;
    let circulationDigit = circulationPart.length;
    let result = {};
    let decimalDenominator = Math.pow(10, decimalDigit);
    let circulationDenominator = Math.pow(10, circulationDigit);
    let allDenominator = Math.pow(10, circulationDigit + decimalDigit);
    let denominator = allDenominator - decimalDenominator;
    result.numerator = parseInt(integerPart) * allDenominator +
        parseInt(decimalPart) * circulationDenominator +
        parseInt(circulationPart) -
        parseInt(integerPart) * decimalDenominator -
        parseInt(decimalPart);
    result.denominator = denominator;
    let gcd = __divisionAlgorithm(result.denominator, result.numerator);
    result.numerator /= gcd;
    result.denominator /= gcd;
    return result;
}

/**
 * 辗转相除法计算出最大公约数
 * @param a
 * @param b
 * @returns {*}
 */
function __divisionAlgorithm(a, b) {
    if (a === b) {
        return a;
    }
    if (a === 0) return b;
    if (b === 0) return a;
    if (a > b) {
        return __divisionAlgorithm(a % b, b);
    } else {
        return __divisionAlgorithm(a, b % a);
    }
}

function fractionalAddFractional(a, b) {
    let result = {};
    let denominator = a.denominator * b.denominator;
    let numerator = a.numerator * b.denominator + b.numerator * a.denominator;
    let gcd = __divisionAlgorithm(denominator, numerator);
    denominator /= gcd;
    numerator /= gcd;
    result.numerator = numerator;
    result.denominator = denominator;
    return result;
}
