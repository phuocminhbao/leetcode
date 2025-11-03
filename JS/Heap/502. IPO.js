import { MaxHeap, MinHeap } from "datastructures-js";

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
const findMaximizedCapital = (k, w, profits, capitals) => {
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap(([_, capital]) => capital);
    for (let i = 0; i < profits.length; i++) {
        minHeap.push([profits[i], capitals[i]]);
    }
    let leftProjects = k;
    let totalCapital = w;
    while (leftProjects > 0) {
        while (minHeap.root() && minHeap.root()[1] <= totalCapital) {
            maxHeap.push(minHeap.pop()[0]);
        }
        if (!maxHeap.root()) {
            return totalCapital;
        }
        totalCapital += maxHeap.pop();
        leftProjects--;
    }
    return totalCapital;
};

const params = [3, 0, [1, 2, 3], [0, 1, 2]];

const res = findMaximizedCapital(...params);
debugger;
