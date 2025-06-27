/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

import { createBinaryTreeFromArray } from "../utils.js";

class _Node {
    val;
    left;
    right;
    next;
    /**
     * Contructor
     * @param {number} val
     * @param {_Node} left
     * @param {_Node} right
     * @param {_Node} next
     */
    constructor(val, left, right, next) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = (root) => {
    if (!root) {
        return root;
    }
    /**
     * @param {_Node[]} nodes
     */
    const subConnect = (nodes) => {
        if (!nodes[0]) {
            return;
        }
        // Connect
        let preNode = nodes[0];
        nodes.forEach((node, index) => {
            if (index === 0) return;
            preNode.next = node;
            preNode = node;
        });

        // Recursive
        const subNodes = [];
        nodes.forEach((node) => {
            if (node?.left) {
                subNodes.push(node.left);
            }
            if (node?.right) {
                subNodes.push(node.right);
            }
        });
        subConnect([...subNodes, null]);
    };
    subConnect([root, null]);
    return root;
};

const treeArr = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8];
const root = createBinaryTreeFromArray(treeArr);
connect(root);
debugger;
