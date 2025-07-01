class ListNode {
    key;
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
    constructor(key = 0, val = 0, next = null, previous = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.previous = previous;
    }
}

class LinkList {
    head;
    tail;
    length;

    /**
     * Creates an instance of LinkList.
     *
     * @constructor
     * @param {ListNode} head
     * @param {ListNode} tail
     */
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    /**
     * Description placeholder
     *
     * @param {ListNode} node
     */
    put(node) {
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * @param {ListNode} node
     * @returns {ListNode}
     */
    evict(node) {
        if (node === this.head) {
            return this.evictHead();
        }
        if (node === this.tail) {
            return this.evictTail();
        }
        this.length--;
        const { next, previous } = node;
        node.previous = null;
        node.next = null;
        if (previous) {
            previous.next = next;
        }
        if (next) {
            next.previous = previous;
        }
        return node;
    }

    evictHead() {
        this.length--;
        const oldHead = this.head;
        const newHead = this.head.next;
        oldHead.next = null;
        if (newHead?.previous) {
            newHead.previous = null;
        }
        this.head = newHead;
        return oldHead;
    }

    evictTail() {
        this.length--;
        const oldTail = this.tail;
        const newTail = this.tail.previous;
        this.tail = newTail;
        oldTail.next = null;
        oldTail.previous = null;
        newTail.next = null;
        return oldTail;
    }
}

class LRUCache {
    #capacity;
    /**
     * @type {Map<number, ListNode>}
     */
    #keyMap;
    #store;
    /**
     * Creates an instance of LRUCache.
     *
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity = 0) {
        this.#capacity = capacity;
        this.#keyMap = new Map();
        this.#store = new LinkList();
    }
    getStore() {
        return this.#store;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.#keyMap.get(key);
        if (!node) {
            return -1;
        }
        this.#store.evict(node);
        this.#store.put(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if key existed
        const foundItem = this.#keyMap.get(key);
        if (foundItem) {
            this.#store.evict(foundItem);
            this.#store.put(foundItem);
            foundItem.val = value;
            return null;
        }

        // if not existed
        const newNode = new ListNode(key, value);
        // and capacity is not full
        if (this.#store.length === 0 || this.#store.length < this.#capacity) {
            this.#store.put(newNode);
        } else {
            // and capacity is full
            const { key: oldKey } = this.#store.evictHead();
            this.#store.put(newNode);
            this.#keyMap.delete(oldKey);
        }
        this.#keyMap.set(key, newNode);
        return null;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lru = new LRUCache(2);
console.log(lru.put(2, 1));
console.log(lru.put(3, 2));
console.log(lru.get(3));
console.log(lru.get(2));
console.log(lru.put(4, 3));
console.log(lru.get(2));
console.log(lru.get(3));
console.log(lru.get(4));
