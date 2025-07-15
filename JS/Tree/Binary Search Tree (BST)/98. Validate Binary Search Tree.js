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
    let preNode,
        isValid = true;
    const search = (node) => {
        if (!node) {
            return;
        }
        const { left, val, right } = node;
        if (left) {
            search(left);
        }
        if (preNode) {
            isValid = preNode.val > val;
        }
    };
};

const rootArr = [3, 1, 4, null, 2];
const root = createBinaryTreeFromArray(rootArr);
console.log(isValidBST(root));
