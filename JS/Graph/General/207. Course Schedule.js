import { Queue } from "datastructures-js";

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    /**
     * @type {Record<number, Set<number>}
     */
    const graph = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, prerequisite] = prerequisites[i];
        if (!graph[course]) {
            graph[course] = new Set();
        }
        graph[course].add(prerequisite);
        if (!graph[prerequisite]) {
            graph[prerequisite] = new Set();
        }
    }

    /**
     * @param {number} course
     * @returns {boolean}
     */
    const bfs = (course) => {
        /**
         * @type {Queue<number>}}
         */
        const queue = new Queue([course]);
        const totalCourses = new Set([course]);
        while (queue.size() > 0) {
            const learningCourse = queue.pop();
            if (totalCourses.size > numCourses) {
                return false;
            }
            graph[learningCourse].forEach((requiredCourse) => {
                queue.push(requiredCourse);
                totalCourses.add(requiredCourse);
            });
        }
        return totalCourses.size <= numCourses;
    };

    return Object.keys(graph).every((course) => {
        return bfs(Number(course));
    });
};

const numCourses = 4;
const prerequisites1 = [
    // [
    //     [0, 1],
    //     [1, 0],
    // ],
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
    [
        [2, 0],
        [1, 0],
        [3, 1],
        [3, 2],
        [1, 3],
    ],
];

const res = prerequisites1.map((prerequisites) =>
    canFinish(numCourses, prerequisites)
);
debugger;
