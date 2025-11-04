import { MaxHeap, MinHeap } from "datastructures-js";

class MedianFinder {
    /**
     * First half of stream (size === 2nd's size or === 2nd's size + 1)
     *
     * @type {MinHeap<Number>}
     */
    #minHeap;
    /**
     * Second half of stream
     *
     * @type {MaxHeap<Number>}
     */
    #maxHeap;

    constructor() {
        this.#minHeap = new MinHeap();
        this.#maxHeap = new MaxHeap();
    }

    get Size() {
        return this.#minHeap.size() + this.#maxHeap.size();
    }

    #validateHeaps() {
        if (
            [this.#maxHeap.size(), this.#maxHeap.size() + 1].includes(
                this.#minHeap.size()
            )
        ) {
            return;
        }
        throw new Error("Invalid length of 2 heaps");
    }

    #fixHeaps() {
        if (this.#minHeap.root() === null || this.#maxHeap.root() === null) {
            return;
        }
        if (this.#minHeap.root() >= this.#maxHeap.root()) {
            return;
        }
        const temp = this.#minHeap.pop();
        this.#minHeap.push(this.#maxHeap.pop());
        this.#maxHeap.push(temp);
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.#minHeap.size() > this.#maxHeap.size()) {
            this.#maxHeap.push(num);
        } else {
            this.#minHeap.push(num);
        }
        this.#fixHeaps();
        // Validate after adding number
        this.#validateHeaps();
    }
    /**
     * @return {number}
     */
    findMedian() {
        if (this.Size % 2 === 0) {
            return (this.#minHeap.root() + this.#maxHeap.root()) / 2;
        }
        return this.#minHeap.root();
    }
}

const finder = new MedianFinder();
const actions = [
    "MedianFinder",
    "addNum",
    "findMedian",
    "addNum",
    "findMedian",
    "addNum",
    "findMedian",
    "addNum",
    "findMedian",
    "addNum",
    "findMedian",
];

const params = [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []];
console.time("RunTime");
const res = actions.map((action, index) => {
    if (index === 0) {
        return null;
    }
    return finder[action](...params[index]);
});
console.log(res);
console.timeEnd("RunTime");
