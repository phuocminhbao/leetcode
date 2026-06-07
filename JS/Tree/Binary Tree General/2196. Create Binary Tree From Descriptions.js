import { createArrayFromBinaryTree, TreeNode } from "../utils.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = (descriptions) => {
    const nodeMap = {};
    const withParent = new Set();
    descriptions.forEach(([parent, child, isLeft]) => {
        /**
         * Description placeholder
         *
         * @type {TreeNode}
         */
        let parentNode, childNode;
        if (nodeMap[parent]) {
            parentNode = nodeMap[parent];
        } else {
            parentNode = new TreeNode(parent);
            nodeMap[parent] = parentNode;
            withParent.add(parent);
        }
        if (nodeMap[child]) {
            childNode = nodeMap[child];
        } else {
            childNode = new TreeNode(child);
            nodeMap[child] = childNode;
            withParent.add(child);
        }
        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        withParent.delete(child);
    });
    return nodeMap[withParent.values().next().value];
};

const res = createBinaryTree([
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
]);
console.log(createArrayFromBinaryTree(res));
