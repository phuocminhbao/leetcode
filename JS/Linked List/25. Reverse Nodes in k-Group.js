/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { reverseBetween } from "./92. Reverse Linked List II.js";
import { ListNode, createLinkedList } from "./utils.js";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    let newHead = head;
    let curr = newHead;
    let count = 1;
    let lastCount = 1;
    while (curr) {
        if (count % k === 0 && count > lastCount) {
            newHead = reverseBetween(newHead, count - k + 1, count);
            lastCount = count;
            count = 1;
            curr = newHead;
            continue;
        }
        curr = curr.next;
        count++;
    }
    return newHead;
};

const head = createLinkedList([1, 2, 3, 4, 5]);
const k = 3;
reverseKGroup(head, k);
