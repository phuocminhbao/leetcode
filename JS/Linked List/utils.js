const createLinkedList = (arr) => {
    if (!arr.length) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
};

class ListNode {
    val;
    next;
    previous;

    /**
     * Creates an instance of ListNode.
     *
     * @constructor
     * @param {number} [val=0]
     * @param {ListNode} [next=null]
     * @param {ListNode} [previous=null]
     */
    constructor(val = 0, next = null, previous = null) {
        this.val = val;
        this.next = next;
        this.previous = previous;
    }
}

export { ListNode, createLinkedList };
