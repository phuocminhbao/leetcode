/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const tCountMap = {};
    for (const char of t) {
        if (tCountMap[char]) {
            tCountMap[char]++;
            continue;
        }
        tCountMap[char] = 1;
    }
    let count = s.length;
    for (const char of s) {
        if (tCountMap[char] === undefined || tCountMap[char] <= 0) {
            return false;
        }
        count--;
        tCountMap[char]--;
    }
    return count === 0;
};
