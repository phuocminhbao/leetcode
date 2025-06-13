class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

const head = undefined;
reverseList(head);
