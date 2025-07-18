const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const res = [];

    const backtracking = (i, currString) => {
        if (currString.length === digits.length) {
            if (!currString) {
                return;
            }
            res.push(currString);
            return;
        }
        for (const letter of digitMap[digits[i]]) {
            backtracking(i + 1, currString + letter);
        }
    };
    backtracking(0, "");

    return res;
};

const digits = "";
console.log(letterCombinations(digits));
