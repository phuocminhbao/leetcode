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
    let min = Infinity,
        preNode = null;

    // preDirection: left, right
    const cal = (node) => {
        if (!node) {
            return;
        }
        const { val, left, right } = node;
        if (left) {
            cal(left);
        }
        if (preNode) {
            min = Math.min(min, val - preNode.val);
        }
        preNode = node;
        cal(right);
    };
    cal(root);
    return min;
};

const treeArr = [0, null, 2236, 1277, 2776, 519];
const root = createBinaryTreeFromArray(treeArr);
console.log(getMinimumDifference(root));
