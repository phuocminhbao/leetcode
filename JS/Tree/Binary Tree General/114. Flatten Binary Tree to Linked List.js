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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
    if (!root) {
        return;
    }
    const flattenNodes = [root];
    const flattenNode = (node) => {
        if (!node) return;
        if (node.left) {
            flattenNodes.push(node.left);
            flattenNode(node.left);
        }
        if (node.right) {
            flattenNodes.push(node.right);
            flattenNode(node.right);
        }
    };
    flattenNode(root);
    let preNode = flattenNodes[0];
    flattenNodes.forEach((node, index) => {
        node.left = null;
        if (index === 0) {
            preNode = node;
            return;
        }
        preNode.right = node;
        preNode = node;
    });
};

const treeArr = [1, 2, 5, 3, 4, null, 6];
const root = createBinaryTreeFromArray(treeArr);
flatten(root);
debugger;
