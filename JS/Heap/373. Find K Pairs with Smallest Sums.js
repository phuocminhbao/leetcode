import { MinHeap } from "datastructures-js";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = (nums1, nums2, k) => {
    const pairs = [];
    const minHeap = new MinHeap(([sum]) => sum);

    minHeap.push([nums1[0] + nums2[0], 0, 0]);
    const visited = new Set();
    visited.add("0-0");
    while (pairs.length < k) {
        const [sum, num1Index, num2Index] = minHeap.pop();
        pairs.push([nums1[num1Index], nums2[num2Index]]);

        if (num1Index + 1 < nums1.length) {
            if (!visited.has(`${num1Index + 1}-${num2Index}`)) {
                minHeap.push([
                    nums1[num1Index + 1] + nums2[num2Index],
                    num1Index + 1,
                    num2Index,
                ]);
                visited.add(`${num1Index + 1}-${num2Index}`);
            }
        }

        if (num2Index + 1 < nums2.length) {
            if (!visited.has(`${num1Index}-${num2Index + 1}`)) {
                minHeap.push([
                    nums1[num1Index] + nums2[num2Index + 1],
                    num1Index,
                    num2Index + 1,
                ]);
                visited.add(`${num1Index}-${num2Index + 1}`);
            }
        }
    }
    return pairs;
};

const nums1 = [1, 7, 12];
const nums2 = [2, 5, 9];
const k = 2;
const res = kSmallestPairs(nums1, nums2, k);
debugger;
