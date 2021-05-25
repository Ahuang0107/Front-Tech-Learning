import WeakMapStack from "./WeakMapStack.js";

export function decimalToBinary(decNumber) {
    if (decNumber === 0) {
        return '0'
    }
    let remainder
    const resultStack = new WeakMapStack()
    while (decNumber > 0) {
        remainder = Math.floor(decNumber % 2)
        resultStack.push(remainder)
        decNumber = Math.floor(decNumber / 2)
    }
    let result = ''
    while (!resultStack.isEmpty()) {
        result += resultStack.pop().toString()
    }
    return result
}
