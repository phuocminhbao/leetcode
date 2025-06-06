/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     if (nums.length < 2) {
//         return nums.length;
//     }
//     // Pre-proccess => set undefined for num that appear for the third time
//     let count = 1;
//     let lastNum = nums[0];
//     nums.forEach((num, index) => {
//         if (index === 0) {
//             return;
//         }
//         if (num !== lastNum) {
//             count = 0;
//             lastNum = num;
//         }
//         count++;
//         if (count > 2) {
//             nums[index] = undefined;
//         }
//     });

//     // Main proccess
//     const swap = (num1, num2) => {
//         [nums[num1], nums[num2]] = [nums[num2], nums[num1]];
//     };

//     let left = nums.indexOf(undefined) > 0 ? nums.indexOf(undefined) : 0;
//     let right = left + 1;

//     while (left < right && right < nums.length) {
//         if (nums[left] === undefined && nums[right] !== undefined) {
//             swap(left, right);
//             left++;
//         }
//         right++;
//     }

//     return nums.indexOf(undefined) > 0 ? nums.indexOf(undefined) : nums.length;
// };

var removeDuplicates = function (nums) {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (j === 1 || nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i];
        }
    }
    return j;
};

// Should mutate the nums[] and return the length of mutated nums[]
const nums1 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7];
const k1 = removeDuplicates(nums1);
console.log(nums1[k1] === undefined);

// const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// const k2 = removeDuplicates(nums2);
// console.log(nums2[k2] === undefined);

// const nums3 = [1, 1];
// const k3 = removeDuplicates(nums3);
// console.log(nums3[k3] === undefined);
