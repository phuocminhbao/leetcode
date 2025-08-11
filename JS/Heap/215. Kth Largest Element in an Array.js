import { MaxPriorityQueue } from "datastructures-js";
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
    const minHeap = new MaxPriorityQueue();
    nums.forEach((num) => minHeap.push(num));
    let res;
    let popCount = 0;
    while (popCount < k) {
        res = minHeap.pop();
        popCount++;
    }
    return res;
};

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k));
