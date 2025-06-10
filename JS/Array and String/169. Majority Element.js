/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const appearanceMap = {};
    nums.forEach((num) => {
        if (appearanceMap[num] !== undefined) {
            appearanceMap[num] = appearanceMap[num] + 1;
            return;
        }
        appearanceMap[num] = 1;
    });
    return Object.entries(appearanceMap).reduce((max, current) => {
        const [num, count] = current;
        if (appearanceMap[max] < count) {
            return num;
        }
        return max;
    }, nums[0]);
};

const nums = [6, 5, 5];
console.log(majorityElement(nums));
