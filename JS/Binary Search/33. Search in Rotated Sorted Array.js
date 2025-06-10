/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midNum = nums[mid];
        const lNum = nums[l];
        const rNum = nums[r];
        const chooseLeft = () => {
            r = mid - 1;
        };
        const chooseRight = () => {
            l = mid + 1;
        };
        if (midNum === target) {
            return mid;
        }
        if (lNum <= midNum) {
            if (target > midNum || target < lNum) {
                chooseRight();
                continue;
            }
            chooseLeft();
            continue;
        }
        if (target < midNum || target > rNum) {
            chooseLeft();
            continue;
        }
        chooseRight();
    }
    return -1;
};

const nums = [4, 5, 6, 7, 8, 1, 2, 3];
const target = 8;
console.log(search(nums, target));
