/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    if (s.length === 0) {
        return true;
    }
    if (t.length === 0 && s.length > 0) {
        return false;
    }
    let traveler1 = 0,
        traveler2 = 0;
    while (traveler1 < s.length && traveler2 < t.length) {
        const currSChar = s[traveler1];
        const currTChar = t[traveler2];
        const isLastSChar = traveler1 === s.length - 1;
        if (currSChar === currTChar) {
            if (isLastSChar) {
                return true;
            }
            traveler1++;
            traveler2++;
            continue;
        }
        traveler2++;
    }
    return false;
};

const s = "axc";
const t = "ahbgdc";
console.log(isSubsequence(s, t));
