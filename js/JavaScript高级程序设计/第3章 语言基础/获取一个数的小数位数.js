function getDecimalsDigitsCount(number){
    let array=number.toString().split(".")
    if(array[1]){
        return array[1].length
    }else{
        return 0
    }
}

console.log(getDecimalsDigitsCount(1.23))
console.log(getDecimalsDigitsCount(1.23456))
console.log(getDecimalsDigitsCount(1))
