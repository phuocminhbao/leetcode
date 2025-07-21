/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
    const res = [];
    const backtrack = (start, currCombinationSum, currSum) => {
        if (currSum === target) {
            res.push([...currCombinationSum]);
            return;
        }
        if (currSum > target) {
            return;
        }
        for (let index = start; index < candidates.length; index++) {
            const candidate = candidates[index];
            currCombinationSum.push(candidate);
            backtrack(index, currCombinationSum, currSum + candidate);
            currCombinationSum.pop();
        }
    };
    backtrack(0, [], 0);
    return res;
};

const candidates = [1, 2, 3, 6, 7];
const target = 7;
const res = combinationSum(candidates, target);
debugger;
