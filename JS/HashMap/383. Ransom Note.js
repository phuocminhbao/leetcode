/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const map = {};
    for (const letter of magazine) {
        if (map[letter]) {
            map[letter]++;
            continue;
        }
        map[letter] = 1;
    }
    for (const letter of ransomNote) {
        const letterAmount = map[letter];
        if (letterAmount === undefined || letterAmount <= 0) {
            return false;
        }
        map[letter]--;
    }
    return true;
};

console.log(canConstruct("aa", "aab"));
