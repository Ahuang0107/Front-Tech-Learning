/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let string = s.split('');
    const stack = new Stack();
    let first = '';
    while (string.length > 0) {
        first = string[0];
        if (first === '(' || first === '{' || first === '[') {
            stack.push(first);
            string.shift();
        } else if (first === '') {
            string.shift();
        } else if (first === ')' || first === '}' || first === ']') {
            if ((first === ')' && stack.peek() === '(') || (first === ']' && stack.peek() === '[') || (first === '}' && stack.peek() === '{')) {
                string.shift();
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.isEmpty();

};

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
test.push('()');
test.push("()[]{}");
test.push("(]");
test.push("([)]");
test.push("{[]}");
test.push("{");

for (const value of test) {
    console.log(isValid(value));
}
