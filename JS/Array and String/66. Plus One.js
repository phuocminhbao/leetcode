/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        const number = digits[i];
        if (number === 9) {
            digits[i] = 0;
            continue;
        }
        digits[i] = number + 1;
        return digits;
    }
    return [1, ...digits];
};

const res = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
debugger;
