import { createBinaryTreeFromArray, TreeNode } from "../utils.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    const getMax = (root) => {
        if (!root) {
            return 0;
        }
        return 1 + Math.max(getMax(root.left), getMax(root.right));
    };
    return getMax(root);
};

const treeArray = [1, null, 2];
const root = createBinaryTreeFromArray(treeArray);
console.log(maxDepth(root));
