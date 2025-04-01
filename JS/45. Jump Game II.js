/**
 * @param {number[]} nums
 * @return {number}
 */
const canJumpMemoi = (nums) => {
    const memo = {};
    const getMinJumps = (position) => {
        if (memo[position] !== undefined) {
            return memo[position];
        }
        if (position >= nums.length - 1) {
            return 0;
        }
        if (nums[position] === 0) {
            return Infinity;
        }
        const maxJumps = nums[position];
        let min = getMinJumps(position + maxJumps);
        for (let i = maxJumps - 1; i > 0; i--) {
            min = Math.min(min, getMinJumps(position + i));
        }
        memo[position] = 1 + min;
        return 1 + min;
    };
    return getMinJumps(0);
};

const jumpTabulation = (nums) => {
    const length = nums.length;
    const dp = new Array(nums.length).fill(Infinity);
    // base case: to reach end at end postion need 0 step
    dp[nums.length - 1] = 0;

    // For each position from the end
    // override the the value by min of current dp value with 1 + each next values until reach the max jumps of that position
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i; j <= i + nums[i] && j <= length - 1; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[j]);
        }
    }
    return dp[0];
};

const nums = [
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
];

const res = jumpTabulation(nums);
console.log(res);
