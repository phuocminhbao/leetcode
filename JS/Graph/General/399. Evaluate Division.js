/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
    /**
     * @type {Record<string, [string, number][]>}
     */
    const graph = {};
    const validVariables = new Set();
    equations.forEach(([dividend, divisor], index) => {
        validVariables.add(dividend);
        validVariables.add(divisor);

        // Build graph
        if (!graph[dividend]) {
            graph[dividend] = [];
        }
        graph[dividend].push([divisor, values[index]]);
        if (!graph[divisor]) {
            graph[divisor] = [];
        }
        graph[divisor].push([dividend, 1 / values[index]]);
    });

    const bfs = ([dividend, divisor]) => {
        const visited = {};
        const queue = graph[dividend].map((item) => [1, ...item]);
        visited[dividend] = true;
        while (queue.length > 0) {
            let loopCount = queue.length;
            for (let i = 0; i < loopCount; i++) {
                const [total, currDivisor, value] = queue.shift();
                if (currDivisor === divisor) {
                    return total * value;
                }
                if (visited[currDivisor]) {
                    continue;
                }
                graph[currDivisor].forEach((item) => {
                    queue.push([total * value, ...item]);
                });
                visited[currDivisor] = true;
            }
        }
        return undefined;
    };

    return queries.map(([dividend, divisor]) => {
        if (!validVariables.has(dividend) || !validVariables.has(divisor)) {
            return -1;
        }
        if (dividend === divisor) {
            return 1;
        }
        // Main
        return bfs([dividend, divisor]) ?? -1;
    });
};

const equations = [
    ["a", "b"],
    ["b", "c"],
    ["a", "c"],
    ["d", "e"],
];
const values = [2.0, 3.0, 6.0, 1.0];
const queries = [
    ["a", "e"],
    ["a", "c"],
    ["b", "c"],
    ["a", "a"],
    ["x", "x"],
    ["a", "d"],
];
const res = calcEquation(equations, values, queries);
debugger;
