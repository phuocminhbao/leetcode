/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams1 = (strs) => {
    if (strs.length === 0) {
        return [];
    }
    if (strs.length === 1) {
        return [strs];
    }
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

    const result = [];
    result[0] = [strs[0]];
    for (let index = 1; index < strs.length; index++) {
        const str = strs[index];
        const anagramGroup = result.find(([anagramStr]) =>
            isAnagram(anagramStr, str),
        );
        if (anagramGroup) {
            anagramGroup.push(str);
        } else {
            result.push([str]);
        }
    }
    return result;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {
    if (strs.length === 0) {
        return [];
    }
    if (strs.length === 1) {
        return [strs];
    }
    const map = {};
    strs.forEach((str) => {
        const sorted = str.split("").toSorted().join("");
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    });
    return Object.values(map);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const res = groupAnagrams(strs);
console.log(res);
