/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  const temp = [];
  nums.forEach((num) => {
    if (num !== val) {
      temp.push(num);
    }
  });
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  return temp.length;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const res = removeElement(nums, val);

console.log({ nums, res });
