/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
    let l = 0,
        r = nums.length - 1;
    let min = nums[l];
    while (l <= r) {
        const m = Math.floor((r + l) / 2);
        const right = nums[r];
        const left = nums[l];
        const mid = nums[m];
        min = Math.min(...[min, left, right, mid]);
        if (mid > right) {
            l = m + 1;
            continue;
        }
        r = m - 1;
    }
    return min;
};

const nums = [11, 13, 15, 17];
console.log(findMin(nums));
