"use strict";

function decimalToBinary(decNumber) {
    let number = decNumber;
    if (number < 2) {
        return number;
    } else {
        const stack = new Stack();
        while (number > 0) {
            stack.push(number % 2);
            number = Math.floor(number / 2)
        }
        let res = '';
        while (!stack.isEmpty()) {
            res += stack.pop();
        }
        return res;
    }
}

class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.count = 0;
        this.items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}${this.items[i]}`;
        }
        return objString;
    }
}

let test = [];
test.push(10);
test.push(0);
test.push(1);
test.push(2);
test.push(12333);

for (const value of test) {
    console.log(decimalToBinary(value));
}


