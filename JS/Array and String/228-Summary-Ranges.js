/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
    const arr = [];
    let left = 0;
    let right = 0;
    const toRangeString = (num1, num2) => {
        if (num1 === num2) {
            return `${num1}`;
        }
        return `${num1}->${num2}`;
    };
    while (right < nums.length) {
        const leftNum = nums[left];
        const rightNum = nums[right];

        if (right === nums.length) {
            arr.push(toRangeString(leftNum, rightNum));
            right++;
            continue;
        }
        if (rightNum + 1 === nums[right + 1]) {
            right++;
            continue;
        }
        arr.push(toRangeString(leftNum, rightNum));
        left = right + 1;
        right = right + 1;
    }
    return arr;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
