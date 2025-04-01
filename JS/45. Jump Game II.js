/**
 * @param {number[]} nums
 * @return {number}
 */
const canJumpMemoi = (nums) => {
    const getMinJumps = (position) => {
        if (position >= nums.length - 1) {
            return 0;
        }
        const maxJumps = nums[position];
        if (position + maxJumps >= nums.length - 1) {
            return 1;
        }
        let highestNextPosition = position + 1;
        let highestNextJumps = nums[highestNextPosition];
        for (let i = position + 2; i <= position + maxJumps; i++) {
            if (nums[i] > highestNextJumps) {
                highestNextJumps = nums[i];
                highestNextPosition = i;
            }
        }
        return 1 + getMinJumps(highestNextPosition);
    };
    return getMinJumps(0);
};

const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0];

const res = canJumpMemoi(nums);
console.log(res);
