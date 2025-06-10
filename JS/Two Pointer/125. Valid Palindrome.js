/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const isAlphanumeric = (char) => {
        return /^[a-zA-Z0-9]$/.test(char);
    };
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        const leftChar = s[l].toLowerCase();
        const rightChar = s[r].toLowerCase();
        if (!isAlphanumeric(leftChar)) {
            l++;
            continue;
        }
        if (!isAlphanumeric(rightChar)) {
            r--;
            continue;
        }
        if (leftChar !== rightChar) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

const s = " ";
console.log(isPalindrome(s));
