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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    if (!root) {
        return false;
    }
    let newSum = targetSum - root.val;

    const isLeaf = !root.left && !root.right;
    if (isLeaf) {
        return newSum === 0;
    }
    return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
};

const treeArr = [-2, null, -3];
const root = createBinaryTreeFromArray(treeArr);
const targetSum = -5;
console.log(hasPathSum(root, targetSum));
