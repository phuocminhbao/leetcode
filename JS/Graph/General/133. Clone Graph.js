class _Node {
    val;

    /**
     * @type {_Node[]}
     */
    neighbors;

    /**
     * Creates an instance of _Node.
     *
     * @constructor
     * @param {number} val
     * @param {_Node[]} neighbors
     */
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = (node) => {
    if (!node) {
        return;
    }
    const map = new Map();
    const queue = [node];
    map.set(node, new _Node(node.val));
    while (queue.length > 0) {
        const currNode = queue.shift();
        map.get(currNode).neighbors = currNode.neighbors.map((neighborNode) => {
            if (map.get(neighborNode)) {
                return map.get(neighborNode);
            }
            const cloneNode = new _Node(neighborNode.val);
            map.set(neighborNode, cloneNode);
            queue.push(neighborNode);
            return cloneNode;
        });
    }
    return map.get(node);
};

const res = cloneGraph(new _Node(1, [new _Node(2, []), new _Node(4, [])]));
debugger;
