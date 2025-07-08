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
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
    if (!root) {
        return [];
    }
    const res = [];
    const queue = [root];
    // left -> right : true
    // right -> left : false
    let direction = true;
    while (queue.length) {
        const currentQueueLength = queue.length;
        const subQueue = [];
        for (let i = 0; i < currentQueueLength; i++) {
            const { val, left, right } = queue.shift();
            subQueue[direction ? "push" : "unshift"](val);
            left && queue.push(left);
            right && queue.push(right);
        }
        res.push(subQueue);
        direction = !direction;
    }
    return res;
};

const treeArr = [1, 2, 3, 4, null, null, 5];
const root = createBinaryTreeFromArray(treeArr);
const res = zigzagLevelOrder(root);
debugger;
