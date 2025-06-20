import { TreeNode, createArrayFromBinaryTree } from "../utils.js";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    const inorderMap = inorder.reduce((map, num, index) => {
        map[num] = { index, count: 1 };
        return map;
    }, {});
    const treeNodeMap = {};
    /**
     * @type {TreeNode}
     */
    let root;
    const createNode = (preorderIndex) => {
        const preorderValue = preorder[preorderIndex];
        const inorderIndex = inorderMap[preorderValue].index;
        const node = new TreeNode(preorderValue);
        treeNodeMap[preorderValue] = node;
        if (!root) {
            root = node;
        }

        // create left and right node
    };
    createNode(1);
    return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const res = buildTree(preorder, inorder);

console.log(createArrayFromBinaryTree(res));
