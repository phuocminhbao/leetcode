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
const countNodes = (root) => {
    if (!root) {
        return 0;
    }
    const countSubNodes = (root) => {
        if (!root || (!root.left && !root.right)) {
            return 0;
        }
        if (root.right) {
            return 2 + countSubNodes(root.left) + countSubNodes(root.right);
        }
        return 1 + countSubNodes(root.left);
    };
    return 1 + countSubNodes(root);
};

const treeArr = [1];
const root = createBinaryTreeFromArray(treeArr);
console.log(countNodes(root));
