/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode, createBinaryTreeFromArray } from "../utils.js";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels1 = (root) => {
    /**
     * @param {TreeNode[]} nodes
     */
    const getAverageByBFS = (nodes) => {
        if (nodes.length < 0 || !nodes[0]) {
            return [];
        }
        const thisLevelAverage =
            nodes.reduce((total, currNode) => total + currNode.val, 0) /
            nodes.length;
        const nextLevelNodes = nodes.flatMap((node) => {
            const nodes = [];
            const { left, right } = node;
            left && nodes.push(left);
            right && nodes.push(right);
            return nodes;
        });
        return [thisLevelAverage, ...getAverageByBFS(nextLevelNodes)];
    };
    return getAverageByBFS([root]);
};

const averageOfLevels = (root) => {
    const res = [];
    const queue = [root];
    while (queue.length) {
        const size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const { val, left, right } = queue.shift();
            sum += val;
            left && queue.push(left);
            right && queue.push(right);
        }
        res.push(sum / size);
    }
    return res;
};

const treeArr = [3, 9, 20, null, null, 15, 7];
const root = createBinaryTreeFromArray(treeArr);
console.log(averageOfLevels(root));
