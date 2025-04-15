/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Prefix sums algorithms: generate a prefix from an array where prefix[i] = prefix[i - 1] +/-/*// array[i];

const productExceptSelf = (nums) => {
    const prefixProduct = [];
    for (let i = 0; i < nums.length; i++) {
        prefixProduct[i] = (prefixProduct[i - 1] ?? 1) * nums[i];
    }

    const postfixProduct = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        postfixProduct[i] = (postfixProduct[i + 1] ?? 1) * nums[i];
    }
    return nums.map(
        (_, index) =>
            (prefixProduct[index - 1] ?? 1) * (postfixProduct[index + 1] ?? 1)
    );
};

const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
