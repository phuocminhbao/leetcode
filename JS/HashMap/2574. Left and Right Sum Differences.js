/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = (nums) => {
    const leftSums = [0];
    for (let index = 1; index < nums.length; index++) {
        leftSums.push(leftSums[leftSums.length - 1] + nums[index - 1]);
    }
    const rightSums = [...nums];
    rightSums[rightSums.length - 1] = 0;
    for (let index = rightSums.length - 2; index >= 0; index--) {
        rightSums[index] = rightSums[index + 1] + nums[index + 1];
    }
    const res = [];
    for (let index = 0; index < nums.length; index++) {
        res.push(Math.abs(leftSums[index] - rightSums[index]));
    }
    return res;
};

const res = leftRightDifference([10, 4, 8, 3]);
debugger;
