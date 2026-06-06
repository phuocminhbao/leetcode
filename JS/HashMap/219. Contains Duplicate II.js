/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate1 = (nums, k) => {
    const map = {};
    nums.forEach((num, index) => {
        if (!map[num]) {
            map[num] = [index];
            return;
        }
        map[num].push(index);
    });

    for (const key in map) {
        const element = map[key];
        if (element.length <= 1) {
            continue;
        }
        let count = 0;
        while (count < element.length - 1) {
            if (Math.abs(element[count] - element[count + 1]) <= k) {
                return true;
            }
            count++;
        }
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate2 = (nums, k) => {
    const lastSeen = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (lastSeen[num] === undefined) {
            lastSeen[num] = i;
            continue;
        }
        if (Math.abs(i - lastSeen[num]) <= k) {
            return true;
        }
        lastSeen[num] = i;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.size === k + 1) {
            set.delete(nums[i - k - 1]);
        }
        const num = nums[i];
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
};

const res = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
console.log({ res });
