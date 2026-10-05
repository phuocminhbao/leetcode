/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
    const ASTERISK = "*";
    const QUESTION = "?";
    const memo = {};
    const dp = (sIndex, pIndex) => {
        if (memo[`${sIndex}-${pIndex}`] !== undefined) {
            return memo[`${sIndex}-${pIndex}`];
        }
        const sChar = s.charAt(sIndex);
        const pChar = p.charAt(pIndex);
        let res;
        if (sIndex >= s.length) {
            while (pIndex < p.length && p.charAt(pIndex) === ASTERISK) {
                pIndex++;
            }

            res = pIndex >= p.length;
        } else if (sChar !== pChar && ![ASTERISK, QUESTION].includes(pChar)) {
            res = false;
        } else if (pChar === QUESTION) {
            res = dp(sIndex + 1, pIndex + 1);
        } else if (pChar === ASTERISK) {
            const asteriskRes =
                dp(sIndex + 1, pIndex + 1) ||
                dp(sIndex + 1, pIndex) ||
                dp(sIndex, pIndex + 1);
            res = asteriskRes;
        } else {
            res = dp(sIndex + 1, pIndex + 1);
        }
        memo[`${sIndex}-${pIndex}`] = res;
        return res;
    };

    return dp(0, 0);
};

const res = isMatch(
    "babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab",
    "***bba**a*bbba**aab**b",
);
debugger;
