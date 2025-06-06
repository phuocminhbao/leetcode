/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  if (nums[l] > target) {
    return 0;
  }
  if (nums[r] < target) {
    return r + 1;
  }
  while (l <= r) {
    if (nums[l] === target) {
      return l;
    }
    if (nums[r] === target) {
      return r;
    }
    if (l + 1 === r) {
      return r;
    }
    const mid = Math.round((r + l) / 2);
    const midNumber = nums[mid];
    if (midNumber === target) {
      return mid;
    }
    if (midNumber > target) {
      r = mid;
      continue;
    }
    l = mid;
  }
};

const nums = [2, 7, 8, 9, 10];
const target = 9;

console.log(searchInsert(nums, target));
