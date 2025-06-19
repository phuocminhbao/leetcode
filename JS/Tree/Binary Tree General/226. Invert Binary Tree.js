import { TreeNode, createBinaryTreeFromArray } from "../utils.js";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    if (!root) {
        return root;
    }
    const invert = (root) => {
        if (!root || (!root.left && !root.right)) {
            return;
        }
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
        invert(root.left);
        invert(root.right);
    };
    invert(root);
    return root;
};

const rootArr = [4, 2, 7, 1, 3, 6, 9];
const root = createBinaryTreeFromArray(rootArr);
const res = invertTree(root);
debugger;
