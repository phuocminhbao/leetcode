/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const words = s.split(" ");
    if (words.length !== pattern.length) {
        return false;
    }
    const mapPatternS = {};
    const mapSPattern = {};

    for (let i = 0; i < pattern.length; i++) {
        mapPatternS[pattern[i]] = words[i];
        mapSPattern[words[i]] = pattern[i];
    }

    for (let i = 0; i < pattern.length; i++) {
        if (mapPatternS[pattern[i]] !== words[i]) {
            return false;
        }
        if (mapSPattern[words[i]] !== pattern[i]) {
            return false;
        }
    }
    return true;
};
