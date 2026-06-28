/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = (nums) => {
    const map = {};
    let containsDuplicate = false;
    nums.forEach((num) => {
        if (map[num]) {
            map[num]++;
            containsDuplicate = true;
            return;
        }
        map[num] = 1;
    });
    if (!containsDuplicate) {
        return 1;
    }
    nums.sort((a, b) => b - a);
    const set = new Set(nums);
    let max = 1;
    while (set.size > 0) {
        const num = set.values().next().value;
        map[num]--;
        set.delete(num);
        let count = 1;
        let nextNum = Math.sqrt(num);
        while (map[nextNum] && map[nextNum] >= 2) {
            count += 2;
            map[nextNum] -= 2;
            set.delete(nextNum);
            nextNum = Math.sqrt(nextNum);
        }
        max = Math.max(max, count);
    }
    return max;
};

maximumLength([1, 1]);
