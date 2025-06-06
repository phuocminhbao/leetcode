/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length > s3.length) {
        return false;
    }
    const memo = {};
    const isInter = (i1, i2, i3) => {
        if (i3 === s3.length) {
            return true;
        }
        if (memo[`${i1}-${i2}-${i3}`] !== undefined) {
            return memo[`${i1}-${i2}-${i3}`];
        }
        let ans = false;
        if (s1[i1] === s3[i3]) {
            ans = ans || isInter(i1 + 1, i2, i3 + 1);
        }
        if (s2[i2] === s3[i3]) {
            ans = ans || isInter(i1, i2 + 1, i3 + 1);
        }
        memo[`${i1}-${i2}-${i3}`] = ans;
        return ans;
    };
    return isInter(0, 0, 0);
};

const s1 = "aa";
const s2 = "ab";
const s3 = "aaba";

const res = isInterleave(s1, s2, s3);
console.log(res);
