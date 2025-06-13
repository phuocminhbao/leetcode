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
    let curr = head;
    while (curr) {
        if (curr.val === "arrived") {
            return true;
        }
        curr.val = "arrived";
        curr = curr.next;
    }
    return false;
};

const arr = [3, 2, 0, -4];
const head = createLinkedList(arr);
console.log(hasCycle(head));
