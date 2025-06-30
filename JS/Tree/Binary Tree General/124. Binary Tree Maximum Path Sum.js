/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { createBinaryTreeFromArray, TreeNode } from "../utils.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSumDPMemoi = (root) => {
    const cache = new Map();
    /**
     * @param {TreeNode} node
     * @returns {number}
     */
    const max = (node, isRoot = false) => {
        if (cache.get(node)?.[isRoot ? 1 : 0]) {
            return cache.get(node)[isRoot ? 1 : 0];
        }
        if (!node) {
            return -Infinity;
        }
        const { val, left, right } = node;
        const results = [val, val + max(left), val + max(right)];
        if (isRoot) {
            results.push(
                ...[
                    val + max(left) + max(right),
                    max(left, true),
                    max(right, true),
                ]
            );
        }
        const res = Math.max(...results);
        if (!cache.get(node)) {
            cache.set(node, {
                [isRoot ? 1 : 0]: res,
            });
        } else {
            cache.get(node)[isRoot ? 1 : 0] = res;
        }
        return res;
    };
    return max(root, true);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSumDFS = (root) => {
    let maxNumber = -Infinity;

    /**
     * @param {TreeNode} node
     * @returns {number}
     */
    const getMax = (node) => {
        if (!node) {
            return 0;
        }
        const { val, left, right } = node;
        const maxLeft = Math.max(0, getMax(left));
        const maxRight = Math.max(0, getMax(right));

        maxNumber = Math.max(maxNumber, val + maxLeft + maxRight);

        return val + Math.max(maxLeft, maxRight);
    };
    getMax(root);
    return maxNumber;
};

const treeArr = [-3];
const root = createBinaryTreeFromArray(treeArr);
console.log(maxPathSumDFS(root));
