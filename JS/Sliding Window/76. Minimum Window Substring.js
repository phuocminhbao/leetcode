/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    const characterOfTCount = {};
    for (const char of t) {
        if (!characterOfTCount[char]) {
            characterOfTCount[char] = 1;
            continue;
        }
        characterOfTCount[char] = characterOfTCount[char] + 1;
    }
    let remainChars = t.length;
    let l = 0,
        r = 0;
    const tracking = [];
    let trackIndex = 0;
    let subStr;
    while (l < s.length && r <= s.length) {
        if (remainChars === 0) {
            const currWindowSubString = s.substring(l, r);
            if (!subStr) {
                subStr = currWindowSubString;
            } else {
                subStr =
                    subStr.length > currWindowSubString.length
                        ? currWindowSubString
                        : subStr;
            }
            const leftChar = s[l];
            characterOfTCount[leftChar] = characterOfTCount[leftChar] + 1;
            if (characterOfTCount[leftChar] > 0) {
                remainChars++;
            }
            trackIndex++;
            l = tracking[trackIndex];
            continue;
        }
        if (r >= s.length) {
            r++;
            continue;
        }
        const currRight = s[r];
        if (characterOfTCount[currRight] === undefined) {
            r++;
            continue;
        } else {
            tracking.push(r);
            if (tracking.length === 1) {
                l = tracking[trackIndex];
            }
            characterOfTCount[currRight] = characterOfTCount[currRight] - 1;
            if (characterOfTCount[currRight] >= 0) {
                remainChars--;
            }
            r++;
            continue;
        }
    }

    return subStr ?? "";
};

const s = "abc";
const t = "bc";
console.log(minWindow(s, t));
