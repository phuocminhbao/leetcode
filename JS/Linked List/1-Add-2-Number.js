/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const toListNode = (arr) => {
    if (arr.length === 1) return new ListNode(arr[0]);
    const listNode = new ListNode(arr[0]);
    let curr = listNode;
    arr.forEach((elt, ind) => {
        if (ind === 0) return;
        curr.next = new ListNode(elt);
        curr = curr.next;
    });
    return listNode;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let l1Str = "";
    let currNode = l1;
    while (currNode) {
        l1Str += currNode.val;
        currNode = currNode.next;
    }

    let l2Str = "";
    currNode = l2;
    while (currNode) {
        l2Str += currNode.val;
        currNode = currNode.next;
    }
    const l1StrReverse = l1Str.split("").reverse().join("");
    const l2StrReverse = l2Str.split("").reverse().join("");
    const sum = BigInt(l1StrReverse) + BigInt(l2StrReverse);
    const sumReverse = String(sum)
        .split("")
        .reverse()
        .map((str) => Number(str));
    const result = toListNode(sumReverse);
    return result;
};

const l1 = toListNode([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
]);
const l2 = toListNode([5, 6, 4]);

addTwoNumbers(l1, l2);
