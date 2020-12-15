function palindromeChecker(aString){
    const stringArray=aString.toLocaleString().split(' ').join('');
    const deque=new Deque();
    for(let i=0;i<stringArray.length;i++){
        deque.addBack(stringArray[i]);
    }
    let isEqual=true;
    while(isEqual&&deque.size()>1){
        let head=deque.removeFront(),
            foot=deque.removeBack();
        if(head!==foot){
            isEqual=false;
        }
    }
    return isEqual;
}

class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    addFront(element) {
        if (this.isEmpty()) {   //空的时候与从后加入相同
            this.addBack(element);
        } else if (this.lowestCount > 0) {  //前面lowestCount指针位置在0后面的话，直接塞前面
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {    //前面已经满了，就得将每个元素向后移一个位置，然后塞空出来的位置
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

let test = [];
test.push('abcba');
test.push('abcdef');
test.push('abccba');
test.push('abcdba');
test.push('ab012b210ba');
test.push('');
test.push('s b s');
test.push('s bs');

for(const value of test){
    console.log(palindromeChecker(value));
}
