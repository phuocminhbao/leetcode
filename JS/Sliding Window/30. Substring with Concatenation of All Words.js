/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
    const moveAmount = words[0].length;
    const getWordFromS = (index, isRight = true) => {
        let word = "";
        if (isRight) {
            for (let i = index; i > index - moveAmount; i--) {
                word = (s[i] ?? "") + word;
            }
        } else {
            for (let i = index; i < index + moveAmount; i++) {
                word += s[i] ?? "";
            }
        }
        return word;
    };
    const res = [];
    let remainWords = words.length;
    const wordsCount = words.reduce((map, word) => {
        if (!map[word]) {
            return { ...map, [word]: 1 };
        }
        map[word] = map[word] + 1;
        return map;
    }, {});
    let cloneWordsCount = { ...wordsCount };
    let lWin = 0,
        rWin = lWin + moveAmount - 1;
    const reset = () => {
        cloneWordsCount = { ...wordsCount };
        remainWords = words.length;
    };

    // Logic
    while (lWin < s.length && rWin < s.length) {
        if ((rWin - lWin + 1) % moveAmount !== 0) {
            throw new Error(
                `The window is not divisible by ${moveAmount}: left is ${lWin} - right is ${rWin}`
            );
        }
        const rightWord = getWordFromS(rWin);
        if (!cloneWordsCount[rightWord]) {
            lWin += 1;
            rWin = lWin + moveAmount - 1;
            reset();
            continue;
        }
        cloneWordsCount[rightWord] = cloneWordsCount[rightWord] - 1;
        remainWords -= 1;
        if (remainWords === 0) {
            res.push(lWin);
            lWin += 1;
            rWin = lWin + moveAmount - 1;
            reset();
            continue;
        }
        rWin += moveAmount;
    }

    return res;
};

const s = "aaaaaaaaaaaaaa";
const words = ["aa", "aa"];
console.log(findSubstring(s, words));
