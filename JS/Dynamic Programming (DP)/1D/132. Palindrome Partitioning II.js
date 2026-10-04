/**
 * @param {string} s
 * @return {number}
 */
const minCut = (s) => {
    const isPalindrome = Array.from({ length: s.length }, () =>
        new Array(s.length).fill(false),
    );

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j] && (j - i < 2 || isPalindrome[i + 1][j - 1])) {
                isPalindrome[i][j] = true;
            }
        }
    }

    const memo = {};

    const dp = (i) => {
        if (i === s.length) {
            return -1;
        }
        if (memo[i] !== undefined) {
            return memo[i];
        }
        let minium = Infinity;

        for (let j = i; j < s.length; j++) {
            if (isPalindrome[i][j]) {
                minium = Math.min(minium, 1 + dp(j + 1));
            }
        }
        memo[i] = minium;

        return minium;
    };
    return dp(0);
};

const res = minCut("aab");
debugger;
