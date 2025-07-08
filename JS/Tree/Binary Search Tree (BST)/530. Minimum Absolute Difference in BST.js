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
 * @return {number}
 */
const getMinimumDifference = (root) => {
    if (!root) {
        return Infinity;
    }
    const { val, left, right } = root;
    const currMin = Math.min(
        val - (left?.val ?? Infinity),
        (right?.val ?? Infinity) - val
    );
    return Math.min(
        currMin,
        getMinimumDifference(left),
        getMinimumDifference(right)
    );
};

const treeArr = [1, null, 3, 2];
const root = createBinaryTreeFromArray(treeArr);
console.log(getMinimumDifference(root));
