/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
    const memo = {};
    const getMin = (w1, w2, total) => {
        // if (memo[`${w1}-${w2}`] !== undefined) {
        //     return memo[`${w1}-${w2}`];
        // }
        if ([word1[w1], word2[w2]].every((word) => word === undefined)) {
            return total;
        }
        if (word1[w1] === word2[w2]) {
            // memo[`${w1}-${w2}`] = getMin(w1 + 1, w2 + 1, total);
            return getMin(w1 + 1, w2 + 1, total);
        }
        if (word1[w1] === undefined) {
            return total + (word2.length - w2);
        }
        if (word2[w2] === undefined) {
            return total + (word1.length - w1);
        }
        const addMove = getMin(w1, w2 + 1, total + 1);
        const deleteMove = getMin(w1 + 1, w2, total + 1);
        const replaceMove = getMin(w1 + 1, w2 + 1, total + 1);
        const min = Math.min(addMove, deleteMove, replaceMove);
        memo[`${w1}-${w2}`] = min;
        return min;
    };
    return getMin(0, 0, 0);
};

const word1 = "horse";
const word2 = "ros";
const res = minDistance(word1, word2);
console.log(res);
