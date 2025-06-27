class TreeNode {
    val;
    left;
    right;

    /**
     * Contructor
     * @param {number} val
     * @param {TreeNode} left
     * @param {TreeNode} right
     */
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Description placeholder
 *
 * @param {number[]} array
 * @returns {TreeNode}
 */
const createBinaryTreeFromArray = (array) => {
    if (!array || array.length === 0) {
        return null;
    }

    // Create the root node
    const root = new TreeNode(array[0]);

    // Use a queue to keep track of nodes that need children
    const queue = [root];
    let i = 1;

    // Process nodes level by level
    while (i < array.length) {
        const current = queue.shift();

        // Add left child if exists
        if (i < array.length && array[i] !== null) {
            current.left = new TreeNode(array[i]);
            queue.push(current.left);
        }
        i++;

        // Add right child if exists
        if (i < array.length && array[i] !== null) {
            current.right = new TreeNode(array[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
};

/**
 * Description placeholder
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
const createArrayFromBinaryTree = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    // Use BFS to traverse the tree level by level
    while (queue.length > 0) {
        const node = queue.shift();

        if (node === null) {
            result.push(null);
        } else {
            result.push(node.val);

            // We need to add null nodes to the queue to maintain the structure
            // but we'll stop adding nulls to the queue if both children are null
            queue.push(node.left !== null ? node.left : null);
            queue.push(node.right !== null ? node.right : null);
        }
    }

    // Remove trailing nulls as they're not needed in the array representation
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
};

export { TreeNode, createBinaryTreeFromArray, createArrayFromBinaryTree };
