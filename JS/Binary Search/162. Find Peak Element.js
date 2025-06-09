/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  // Most left or right cases or 1 item array case
  if (nums[0] > nums[1] || nums.length === 1) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midNum = nums[mid];
    const leftMidNum = nums[mid - 1];
    const rightMidNum = nums[mid + 1];
    if (midNum > leftMidNum && midNum > rightMidNum) {
      return mid;
    }
    if (midNum < rightMidNum) {
      l = mid + 1;
      continue;
    }
    r = mid - 1;
  }
  throw new Error("Something wrong");
};

const nums = [3, 4, 3, 2, 1];
console.log(findPeakElement(nums));
