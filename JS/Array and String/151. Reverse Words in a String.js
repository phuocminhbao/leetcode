/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    let finalWords = "";
    let word = "";
    for (let i = s.length - 1; i >= -1; i--) {
        const char = s[i] ?? " ";
        if (char === " ") {
            if (word.length > 0) {
                finalWords = `${finalWords} ${word}`;
            }
            word = "";
            continue;
        }
        word = s[i] + word;
    }
    return finalWords.trimStart();
};

const s = "the sky is blue";
console.log(reverseWords(s));
