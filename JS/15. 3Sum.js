/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const res = [];
  const expectedThreeSum = 0;
  const sortedNums = Array.from(nums).toSorted((a, b) => a - b);
  const twoSum = (start, sum) => {
    const sums = [];
    let l = start,
      r = sortedNums.length - 1;
    while (l < r) {
      const lNum = sortedNums[l];
      const rNum = sortedNums[r];
      const total = lNum + rNum;
      if (total < sum) {
        l++;
        continue;
      }
      if (total > sum) {
        r--;
        continue;
      }
      const [preLNum, preRNum] = sums[sums.length - 1] ?? [];
      if (preLNum === lNum && preRNum === rNum) {
        l++;
        r--;
        continue;
      }
      sums.push([lNum, rNum]);
      l++;
      r--;
    }
    return sums;
  };

  for (let i = 0; i < sortedNums.length; i++) {
    const currNum = sortedNums[i];
    if (currNum === res[res.length - 1]?.[0]) {
      continue;
    }
    const twoSumRes = twoSum(i + 1, expectedThreeSum - currNum);
    if (twoSumRes.length > 0) {
      twoSumRes.forEach((twoSum) => {
        res.push([currNum, ...twoSum]);
      });
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
