import { TreeNode, createArrayFromBinaryTree } from "../utils.js";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    const createNode = (preorder, inorder) => {
        if (!preorder || preorder.length <= 0) {
            return null;
        }
        const rootValue = preorder[0];
        const root = new TreeNode(rootValue);
        const inorderRootIndex = inorder.indexOf(rootValue);
        root.left = createNode(
            preorder.slice(1, inorderRootIndex + 1),
            inorder.slice(0, inorderRootIndex)
        );
        root.right = createNode(
            preorder.slice(inorderRootIndex + 1, preorder.length),
            inorder.slice(inorderRootIndex + 1, inorder.length)
        );
        return root;
    };
    return createNode(preorder, inorder);
};

const preorder = [3, 9, 4, 20, 15, 7];
const inorder = [9, 4, 3, 15, 20, 7];

const res = buildTree(preorder, inorder);

console.log(createArrayFromBinaryTree(res));
