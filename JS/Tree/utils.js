class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

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

export { TreeNode, createBinaryTreeFromArray };
