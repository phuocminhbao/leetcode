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
 * @return {boolean}
 */
const isValidBST = (root) => {
    let preNode = null,
        res = true;
    const isValid = (node) => {
        if (!node || !res) {
            return;
        }
        const { left, val, right } = node;
        if (left) {
            isValid(left);
        }
        if (!res) {
            return;
        }
        if (preNode) {
            res = preNode.val < val;
        }
        preNode = node;
        isValid(right);
    };
    isValid(root);
    return res;
};

const rootArr = [5, 4, 6, null, null, 3, 7];
const root = createBinaryTreeFromArray(rootArr);
console.log(isValidBST(root));
