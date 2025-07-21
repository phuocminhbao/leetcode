/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const res = [];
    const backtrack = (permutation) => {
        if (permutation.length === nums.length) {
            res.push([...permutation]);
            return;
        }
        nums.forEach((num) => {
            if (permutation.includes(num)) {
                return;
            }
            permutation.push(num);
            backtrack(permutation);
            permutation.pop();
        });
    };
    backtrack([]);
    return res;
};

const nums = [1, 2, 3];
const res = permute(nums);
debugger;
