/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchIndex = (nums, target) => {
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
    return -1;
};

const searchRange = (nums, target) => {
    const targetIndex = searchIndex(nums, target);
    if (targetIndex === -1) {
        return [-1, -1];
    }
    let i = targetIndex;
    let start, end;
    while (start === undefined) {
        if (nums[i - 1] !== target) {
            start = i;
            i = targetIndex;
            continue;
        }
        i--;
    }
    while (end === undefined) {
        if (nums[i + 1] !== target) {
            end = i;
            i = targetIndex;
            continue;
        }
        i++;
    }
    return [start, end];
};

const searchRange2 = (nums, target) => {
    const searchIndex2 = (searchSide) => {
        let l = 0,
            r = nums.length - 1,
            i = -1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const midNumber = nums[mid];
            if (midNumber === target) {
                i = mid;
                if (searchSide == "left") {
                    r = mid - 1;
                    continue;
                }
                l = mid + 1;
                continue;
            }
            if (midNumber > target) {
                r = mid - 1;
                continue;
            }
            l = mid + 1;
        }
        return i;
    };
    return [searchIndex2("left"), searchIndex2("right")];
};

const nums = [1, 2, 3, 8, 8, 8, 8, 8, 9];
const target = 8;
console.log(searchRange(nums, target));
