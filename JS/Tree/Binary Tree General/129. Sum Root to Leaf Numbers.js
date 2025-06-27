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
const sumNumbers = (root) => {
    let number = 0;

    const calculate = (root, strNum) => {
        if (!root) {
            return;
        }
        const newStrNum = strNum + root.val;
        const isLeaf = !root.left && !root.right;
        if (isLeaf) {
            number += Number(newStrNum);
            return;
        }
        calculate(root.left, newStrNum);
        calculate(root.right, newStrNum);
    };
    calculate(root, "");

    return number;
};

const treeArr = [1, 2, 3];
const root = createBinaryTreeFromArray(treeArr);
console.log(sumNumbers(root));
