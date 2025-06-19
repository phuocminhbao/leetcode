import { createBinaryTreeFromArray, TreeNode } from "../utils.js";

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    const compare = (node1, node2) => {
        if (!node1 && !node2) {
            return true;
        }
        if ((node1?.val ?? undefined) !== (node2?.val ?? undefined)) {
            return false;
        }
        return (
            compare(node1.left, node2.left) && compare(node1.right, node2.right)
        );
    };
    return compare(p, q);
};

const pArray = [1, 2, 1];
const qArray = [1, 1, 2];
const p = createBinaryTreeFromArray(pArray);
const q = createBinaryTreeFromArray(qArray);
console.log(isSameTree(p, q));
