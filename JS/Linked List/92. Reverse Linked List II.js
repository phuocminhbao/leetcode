/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { createLinkedList, ListNode } from "./utils.js";

const reverseList = (head) => {
    let curr = head;
    let pre = null;
    let next;
    while (curr) {
        // Store next
        next = curr.next;
        // Set curr next = pre
        curr.next = pre;
        // pre now is curr
        pre = curr;
        // next is curr now
        curr = next;
    }
    return pre;
};

const connectNodes = (nodes) => {
    let head = null;
    nodes.forEach((part) => {
        if (!part) {
            return;
        }
        if (!head) {
            head = part;
            return;
        }
        let curr = head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = part;
    });
    return head;
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    let leftPart = head;
    let midPart = head;
    let rightPart = head;
    let position = 1;
    let curr = head;
    // Process to split parts
    while (position <= right) {
        if (position === 1 && left === 1) {
            leftPart = null;
            midPart = head;
            if (position === right) {
                rightPart = curr.next;
                curr.next = null;
            }
            curr = curr.next;
            position++;
            continue;
        }
        if (position === left - 1) {
            midPart = curr.next;
            curr.next = null;
            curr = midPart;
            position++;
            continue;
        }
        if (position === right) {
            rightPart = curr.next;
            curr.next = null;
            position++;
            continue;
        }
        curr = curr.next;
        position++;
    }

    // Process to re-connect parts
    midPart = reverseList(midPart);
    return connectNodes([leftPart, midPart, rightPart]);
};

const head = createLinkedList([1, 2, 3, 4, 5]);
reverseBetween(head, 1, 2);
debugger;
