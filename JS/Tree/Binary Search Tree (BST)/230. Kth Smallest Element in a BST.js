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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    let res,
        remaing = k;
    /**
     * @param {TreeNode} node
     */
    const find = (node) => {
        if (!node || res !== undefined) {
            return;
        }
        const { left, val, right } = node;
        if (left) {
            find(left);
        }
        if (res !== undefined) {
            return;
        }
        if (remaing === 1) {
            res = val;
            return;
        }
        remaing--;
        find(right);
    };
    find(root);
    return res;
};

const rootArr = [3, 1, 4, null, 2];
const root = createBinaryTreeFromArray(rootArr);
const k = 1;
console.log(kthSmallest(root, k));
