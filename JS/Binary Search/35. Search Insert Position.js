/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midNumber = nums[mid];
    if (midNumber === target) {
      return mid;
    }
    if (midNumber > target) {
      r = mid - 1;
      continue;
    }
    l = mid + 1;
  }
  return l;
};

const nums = [2, 7, 8, 9, 10];
const target = 0;

console.log(searchInsert(nums, target));
