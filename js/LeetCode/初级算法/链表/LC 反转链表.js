/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    //迭代法
    // let [prev, curr] = [null, head];
    // while (curr) {
    //     [curr.next, prev, curr] = [prev, curr, curr.next];
    // }
    // return prev;

    //自递归法
    // if (!head || !head.next) return head;
    // let next = head.next; // next节点，反转后是最后一个节点
    // let reverseHead = reverseList(next);
    // head.next = null; // 裁减 head
    // next.next = head; // 尾接
    // return reverseHead;

    //尾递归法
    // return reverse(null, head);

    //reduce构造
    if (!head || !head.next) return head
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reduce((acc, v) => { return { val: v, next: acc } }, null)
};

function reverse (prev, curr) {
    if (!curr) return prev;
    // [curr.next, prev, curr] = [prev, curr.next, curr.next];
    let tmp = curr.next;
    curr.next = prev;
    return reverse(curr, tmp);
}

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

let test = [];
test.push(1);

for (const value of test) {
    console.log(reverseList(head));
}
