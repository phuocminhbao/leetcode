/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const mapST = {};
    const mapTS = {};
    for (let index = 0; index < s.length; index++) {
        mapST[s[index]] = t[index];
        mapTS[t[index]] = s[index];
    }
    for (let index = 0; index < s.length; index++) {
        const sLetter = s[index];
        const tLetter = t[index];
        if (mapST[sLetter] !== tLetter) {
            return false;
        }
        if (mapTS[tLetter] !== sLetter) {
            return false;
        }
    }
    return true;
};

const resA = isIsomorphic("badc", "baba");
const resB = isIsomorphic("foo", "bar");
const resC = isIsomorphic("paper", "title");
console.log({ resA, resB, resC });
