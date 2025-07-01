/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {
    createBinaryTreeFromArray,
    TreeNode,
    findNodeByValue,
} from "../utils.js";
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class CustomTreeNode extends TreeNode {
    parent;
    level;
    treeNode;
    /**
     * Creates an instance of CustomTreeNode.
     * @constructor
     * @param {TreeNode} node
     */
    constructor(node, parent = null, level = 0) {
        const { val, left, right } = node;
        super(val, left, right);
        this.parent = parent;
        this.level = level;
        this.treeNode = node;
    }
}

/**
 *
 * @param {TreeNode} root
 * @returns {CustomTreeNode}
 */
const rebuildTree = (root) => {
    const newRoot = new CustomTreeNode(root, null, 1);

    /**
     *
     * @param {CustomTreeNode} node
     */
    const rebuild = (node) => {
        if (!node) {
            return;
        }
        if (node.left) {
            node.left = new CustomTreeNode(node.left, node, node.level + 1);
            rebuild(node.left);
        }
        if (node.right) {
            node.right = new CustomTreeNode(node.right, node, node.level + 1);
            rebuild(node.right);
        }
    };
    rebuild(newRoot);
    return newRoot;
};

const lowestCommonAncestor = (root, p, q) => {
    const newRoot = rebuildTree(root);
    let newP = findNodeByValue(newRoot, p.val);
    let newQ = findNodeByValue(newRoot, q.val);
    while (newP.level !== newQ.level) {
        if (newP.level > newQ.level) {
            newP = newP.parent;
        } else {
            newQ = newQ.parent;
        }
    }
    let lcaNode = null;
    while (!lcaNode) {
        if (newP === newQ) {
            lcaNode = newP;
            continue;
        }
        newP = newP.parent;
        newQ = newQ.parent;
    }
    return lcaNode.treeNode;
};

const root = createBinaryTreeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p = findNodeByValue(root, 5);
const q = findNodeByValue(root, 4);

const res = lowestCommonAncestor(root, p, q);
debugger;
