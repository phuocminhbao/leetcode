import { ListNode, createLinkedList } from "./utils.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let mergedListHead = null;
    let curr1 = list1,
        curr2 = list2,
        curr3;
    while (curr1 || curr2) {
        const node = new ListNode();
        if ((curr1?.val ?? Infinity) <= (curr2?.val ?? Infinity)) {
            node.val = curr1.val;
            curr1 = curr1.next;
        } else {
            node.val = curr2.val;
            curr2 = curr2.next;
        }
        if (!mergedListHead) {
            mergedListHead = node;
            curr3 = mergedListHead;
            continue;
        }
        curr3.next = node;
        curr3 = curr3.next;
    }
    return mergedListHead;
};

const list1 = createLinkedList([]);
const list2 = createLinkedList([]);
mergeTwoLists(list1, list2);
