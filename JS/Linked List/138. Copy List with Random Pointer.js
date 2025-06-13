/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

import { ListNode } from "./utils.js";

class _Node extends ListNode {
    random;
    constructor(val, next, random = null) {
        super(val, next);
        this.random = random;
    }
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
const copyRandomList = (head) => {
    // Loop to get the cache store
    const cache = new Map();
    cache.set(null, null);
    let curr = head;
    while (curr) {
        cache.set(curr, new _Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    let clonedHead;
    let clonedCurr;
    while (curr) {
        clonedCurr = cache.get(curr);
        clonedCurr.next = cache.get(curr.next);
        clonedCurr.random = cache.get(curr.random);
        if (!clonedHead) {
            clonedHead = clonedCurr;
        }
        curr = curr.next;
        clonedCurr = clonedCurr.next;
    }
    return clonedHead;
};

const n7 = new _Node(7);
const n13 = new _Node(13);
const n11 = new _Node(11);
const n10 = new _Node(10);
const n1 = new _Node(1);
n7.next = n13;
n7.random = null;
n13.next = n11;
n13.random = n7;
n11.next = n10;
n11.random = n1;
n10.next = n1;
n10.random = n11;
n1.random = n7;

copyRandomList(n7);
