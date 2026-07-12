import { Queue } from "datastructures-js";
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    if (prerequisites.length === 0) {
        return true;
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
    const queue = new Queue();
    const result = [];

    for (const [course, { inDegree }] of Object.entries(graph)) {
        if (inDegree === 0) {
            queue.enqueue(Number(course));
        }
    }

    while (!queue.isEmpty()) {
        const course = queue.dequeue();
        result.push(course);
        const { neighbours } = graph[course];
        for (const neighbourCourse of neighbours) {
            graph[neighbourCourse].inDegree--;
            if (graph[neighbourCourse].inDegree === 0) {
                queue.push(neighbourCourse);
            }
        }
    }

    return result.length === numCourses;
};

const numCourses = 5;
const prerequisites1 = [
    [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
    ],
    // [
    //     [0, 1],
    //     [1, 2],
    //     [2, 1],
    // ],
    // [
    //     [0, 1],
    //     [1, 2],
    //     [2, 4], // 0 1 2 3 4 5 6
    //     [2, 5],
    //     [5, 6],
    //     [6, 4],
    //     [4, 3],
    // ],
    // [[5, 5]],
    // [
    //     [2, 0],
    //     [1, 0],
    //     [3, 1],
    //     [3, 2],
    //     [1, 3],
    // ],
];

const res = prerequisites1.map((prerequisites) =>
    canFinish(numCourses, prerequisites),
);
debugger;
