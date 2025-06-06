/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJumpMemoization = (nums) => {
  const memo = {};
  const isJumpable = (position) => {
    if (memo[position] !== undefined) {
      return memo[position];
    }
    if (position >= nums.length - 1) {
      return true;
    }
    const maxJump = nums[position];
    if (maxJump === 0) {
      return false;
    }
    let jumpResult = false;
    for (let i = maxJump; i > 0; i--) {
      jumpResult = jumpResult || isJumpable(position + i);
    }
    memo[position] = jumpResult;
    return jumpResult;
  };
  return isJumpable(0);
};

const canJumpGreedy = (nums) => {
  let farest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i > farest) {
      return false;
    }
    if (i >= nums.length - 1) {
      return true;
    }
    farest = Math.max(farest, i + nums[i]);
  }
};

const nums = [0];

const res = canJumpGreedy(nums);
console.log(res);
