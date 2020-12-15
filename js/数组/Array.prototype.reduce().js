const array1 = [1, 2, 3, 4, 5];
console.log(array1.reduce(
    (accumulator, currentValue, index, array) => {
        console.log(index);
        return new ListNode(currentValue,accumulator);
    }));

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
