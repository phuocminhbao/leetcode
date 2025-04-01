/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const arr = [nums[i]];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > arr[arr.length - 1]) {
        arr.push(nums[j]);
      }
    }
    max = Math.max(max, arr.length);
  }
  return max;
};

lengthOfLIS([0, 1, 0, 3, 2, 3]);
