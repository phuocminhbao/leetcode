import { Queue } from "datastructures-js";

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
    if (prerequisites.length === 0) {
        return [];
    }
    const graph = {};
    // initialize every course, including isolated ones
    for (let i = 0; i < numCourses; i++) {
        graph[i] = { inDegree: 0, neighbours: [] };
    }

    for (const [course, prerequisite] of prerequisites) {
        graph[course].inDegree++;
        graph[prerequisite].neighbours.push(course);
    }
    const entries = [];
    for (const [course, { inDegree }] of Object.entries(graph)) {
        if (inDegree === 0) {
            entries.push(Number(course));
        }
    }

    for (const element of entries) {
        const queue = new Queue();
        queue.enqueue(element);
        const result = [];

        while (!queue.isEmpty()) {
            const course = queue.dequeue();
            result.push(course);
            for (const prerequisite of graph[course].neighbours) {
                graph[prerequisite].inDegree--;
                if (graph[prerequisite].inDegree === 0) {
                    queue.enqueue(prerequisite);
                }
            }
        }
        if (result.length === numCourses) {
            return result;
        }
    }
    return [];
};

const res = findOrder(1, []);

debugger;
