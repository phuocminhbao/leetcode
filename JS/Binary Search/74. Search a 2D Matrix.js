/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const isExisting = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midNumber = nums[mid];
        if (midNumber === target) {
            return true;
        }
        if (midNumber > target) {
            r = mid - 1;
            continue;
        }
        l = mid + 1;
    }
    return false;
};

const searchMatrix = (matrix, target) => {
    let l = 0,
        r = matrix.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (searchInsert(matrix[mid], target)) {
            return true;
        }
        const firstMidNum = matrix[mid][0];
        if (firstMidNum > target) {
            r = mid - 1;
            continue;
        }
        l = mid + 1;
    }
    return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
const target = 3;
console.log(searchMatrix(matrix, target));
