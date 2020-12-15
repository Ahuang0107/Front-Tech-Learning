class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1,
            limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return {done: false, value: count++};
                } else {
                    return {done: true, value: undefined};
                }
            },
            return() {
                console.log('Exiting early');
                return {done: true};
            }
        }
    }
}

let counter = new Counter(5);
console.log(counter[Symbol.iterator]());
for (let i of counter) {
    if(i>2){
        break;
    }
    console.log(i);
}
// for (let i of counter) {
//     console.log(i);
// }
