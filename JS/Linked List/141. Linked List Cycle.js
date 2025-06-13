/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import { ListNode, createLinkedList } from "./utils.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    const a = new ListNode(1);
    return a;
};

const arr = [3, 2, 0, -4];
const head = createLinkedList(arr);
console.log(hasCycle(head));
