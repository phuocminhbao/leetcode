import { TreeNode, createArrayFromBinaryTree } from "../utils.js";

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
    const inorderIndexMap = inorder.reduce((map, current, index) => {
        map[current] = index;
        return map;
    }, {});
    const createNode = ([inStart, inEnd], [postStart, postEnd]) => {
        if (postEnd - postStart < 0) {
            return null;
        }
        if (inEnd - inStart !== postEnd - postStart) {
            throw new Error("inorder and postoder length is different");
        }

        const rootValue = postorder[postEnd];
        const root = new TreeNode(rootValue);
        const inorderRootIndex = inorderIndexMap[rootValue];
        const leftLength = inorderRootIndex - inStart;
        const rightLength = inEnd - inorderRootIndex;
        root.left = createNode(
            [inStart, inorderRootIndex - 1],
            [postStart, postStart + leftLength - 1]
        );
        root.right = createNode(
            [inorderRootIndex + 1, inEnd],
            [postEnd - 1 - rightLength + 1, postEnd - 1]
        );
        return root;
    };
    return createNode([0, inorder.length - 1], [0, postorder.length - 1]);
};

const inorder = [-1];
const postorder = [-1];

const res = buildTree(inorder, postorder);

console.log(createArrayFromBinaryTree(res));
