"use strict";

function baseConverter(decNumber, base) {
    let number = decNumber;
    let _base = base;
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let remainder = -1;
    if (!(_base <= 36)) {
        return -1;
    }
    if (number < _base || _base === 1) {
        return number;
    } else {
        const stack = new Stack();
        while (number > 0) {
            remainder = number % _base;
            if (remainder > 9) {
                stack.push(digits[remainder]);
            } else {
                stack.push(remainder);
            }
            number = Math.floor(number / _base)
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
test.push([0, 1]);
test.push([0, 2]);
test.push([0, 3]);
test.push([0, 5]);
test.push([10, 1]);
test.push([10, 2]);
test.push([10, 3]);
test.push([256, 2]);
test.push([256, 16]);
test.push([256, 11]);
test.push([34252344, 16]);
test.push([34252344, 36]);
test.push([34252344, 37]);

for (const value of test) {
    console.log(baseConverter(value[0], value[1]));
}


