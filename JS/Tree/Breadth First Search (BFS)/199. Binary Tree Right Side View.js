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
 * @return {number[]}
 */
const rightSideViewDFS = (root) => {
    const res = [];
    let visitedLevel = 0;
    const travelAndAdd = (node, level) => {
        if (!node) {
            return;
        }
        const { val, left, right } = node;
        if (level > visitedLevel) {
            visitedLevel = level;
            console.log(visitedLevel);
            res.push(val);
        }
        travelAndAdd(right, level + 1);
        travelAndAdd(left, level + 1);
    };
    travelAndAdd(root, 1);
    return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
    if (!root) {
        return [];
    }

    /**
     * @param {TreeNode[]} nodes
     */
    const search = (nodes) => {
        if (nodes.length === 0) {
            return [];
        }
        const flaternNodes = nodes.flatMap((node) => {
            const nodes = [];
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
            return nodes;
        });
        return [nodes[nodes.length - 1].val, ...search(flaternNodes)];
    };
    return search([root]);
};

const treeArr = [1, null, 3];
const root = createBinaryTreeFromArray(treeArr);
console.log(rightSideView(root));
