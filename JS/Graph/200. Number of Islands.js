import { DirectedGraph } from "datastructures-js";

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    const graph = new DirectedGraph();
    graph
        .addVertex("v1", 1)
        .addVertex("v2", 2)
        .addVertex("v3", 3)
        .addVertex("v4", 4)
        .addVertex("v5", 5);
    debugger;
};
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];

const res = numIslands(grid);
