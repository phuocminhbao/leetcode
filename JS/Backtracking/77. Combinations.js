/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const res = [];
    const backtracking = (start, combination) => {
        if (combination.length === k) {
            res.push([...combination]);
            return;
        }
        for (let index = start; index < n + 1; index++) {
            combination.push(index);
            backtracking(index + 1, combination);
            combination.pop();
        }
    };
    backtracking(1, []);
    return res;
};

const n = 4;
const k = 2;
console.log(combine(n, k));

[1, 2];
