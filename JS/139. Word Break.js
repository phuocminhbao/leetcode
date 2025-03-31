/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    let isValid = false;
    const checkWord = (currWord) => {
        if (isValid) return;
        if (currWord === "") {
            isValid = true;
        }
        for (let i = 0; i < wordDict.length; i++) {
            if (currWord.startsWith(wordDict[i])) {
                checkWord(currWord.replace(wordDict[i], ""));
            }
        }
    };
    checkWord(s);
    return isValid;
};

// const res = wordBreak(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
//     [
//         "a",
//         "aa",
//         "aaa",
//         "aaaa",
//         "aaaaa",
//         "aaaaaa",
//         "aaaaaaa",
//         "aaaaaaaa",
//         "aaaaaaaaa",
//         "aaaaaaaaaa",
//     ]
// );
const res = wordBreak("cars", ["car", "ca", "rs"]);
console.log(res);
