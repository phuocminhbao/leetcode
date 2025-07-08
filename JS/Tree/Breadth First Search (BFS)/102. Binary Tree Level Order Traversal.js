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
 * @return {number[][]}
 */
const levelOrder = (root) => {
    const getLevelOrderValues = (nodes) => {
        if (nodes.length < 0 || !nodes[0]) {
            return [];
        }
        const values = [];
        const nextLevelNodes = [];
        nodes.forEach((node) => {
            const { val, left, right } = node;
            values.push(val);
            left && nextLevelNodes.push(left);
            right && nextLevelNodes.push(right);
        });
        return [values, ...getLevelOrderValues(nextLevelNodes)];
    };
    return getLevelOrderValues([root]);
};

const treeArr = [3, 9, 20, null, null, 15, 7];
const root = createBinaryTreeFromArray(treeArr);
const res = levelOrder(root);
debugger;
