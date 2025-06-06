/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const newK = Math.min(nums.length, k);
  const rotateArr = nums.slice(nums.length - newK);
  nums.splice(nums.length - newK);
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + newK] = nums[i];
  }
  for (let i = 0; i < rotateArr.length; i++) {
    nums[i] = rotateArr[i];
  }
  if (newK < k) {
    rotate(nums, k - newK);
  }
};

const nums = [1, 2];

rotate(nums, 3);
console.log(nums);
