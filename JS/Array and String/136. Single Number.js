/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const set = new Set();
    nums.forEach((num) => {
        if (set.has(num)) {
            set.delete(num);
            returnl;
        }
        set.add(num);
    });
    return set.values().next().value;
};
