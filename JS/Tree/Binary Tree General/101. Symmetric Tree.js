import { TreeNode, createBinaryTreeFromArray } from "../utils.js";
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    if (!root) {
        return true;
    }
    const checkSymmetric = (node1, node2) => {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2) {
            return false;
        }
        if (node1.val !== node2.val) {
            return false;
        }
        return (
            checkSymmetric(node1.left, node2.right) &&
            checkSymmetric(node1.right, node2.left)
        );
    };
    return checkSymmetric(root.left, root.right);
};

const treeArray = [1, 2, 2, 3, 4, 4, 3];
const root = createBinaryTreeFromArray(treeArray);
console.log(isSymmetric(root));
