/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const map = {};
    nums.forEach((num) => {
        if (!map[num]) {
            map[num] = 1;
            return;
        }
        map[num]++;
    });
    return nums.find((num) => map[num] === 1);
};
