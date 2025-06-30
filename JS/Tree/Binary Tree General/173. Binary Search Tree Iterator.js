/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { createBinaryTreeFromArray, TreeNode } from "../utils.js";

class BSTIterator {
    root;
    #currNodeIndex;
    #inorder;
    /**
     * Creates an instance of BSTIterator.
     *
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.root = root;
        this.#inorder = this.#toInorder(root);
        this.#currNodeIndex =
            this.#inorder.indexOf(this.#getNodeWithSmallestValue(root)) - 1;
    }

    /**
     * @param {TreeNode} root
     * @returns {TreeNode[]}
     */
    #toInorder(root) {
        if (!root) {
            return [];
        }
        return [
            ...this.#toInorder(root.left),
            root,
            ...this.#toInorder(root.right),
        ];
    }

    /**
     * @param {TreeNode} root
     * @returns {TreeNode}
     */
    #getNodeWithSmallestValue(root) {
        let smallestNode = root;
        /**
         * @param {TreeNode} node
         */
        const dfs = (node) => {
            const { val, left, right } = node;
            if (val < smallestNode.val) {
                smallestNode = node;
            }
            if (left) {
                dfs(left);
            }
            if (right) {
                dfs(right);
            }
        };
        dfs(root);
        return smallestNode;
    }

    /**
     * @return {number}
     */
    next() {
        this.#currNodeIndex += 1;
        return this.#inorder[this.#currNodeIndex].val;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return !!this.#inorder[this.#currNodeIndex + 1];
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const treeArr = [7, 3, 15, null, null, 9, 20];
const root = createBinaryTreeFromArray(treeArr);
const iterator = new BSTIterator(root);

const actions = [
    "next",
    "next",
    "hasNext",
    "next",
    "hasNext",
    "next",
    "hasNext",
    "next",
    "hasNext",
];
const res = actions.map((action) => iterator[action]());
console.log(res);
