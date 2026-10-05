/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    const [MIN, MAX] = [-1 * Math.pow(2, 31), Math.pow(2, 31) - 1];
    let result = 0;
    let numStr = "";
    let isNegative = false;
    let isMetNonDigit = false;
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (!isMetNonDigit) {
            // White space, +, 0
            if (charCode === 32) {
                continue;
            }
            // +
            if (charCode === 43) {
                isMetNonDigit = true;
                continue;
            }
            // -
            if (charCode === 45) {
                isNegative = !isNegative;
                isMetNonDigit = true;
                continue;
            }
        }
        if (charCode < 48 || charCode > 57) {
            i = s.length;
            continue;
        }
        numStr += s.charAt(i);
        isMetNonDigit = true;
    }

    for (let i = 0; i < numStr.length; i++) {
        result +=
            (numStr.charCodeAt(i) - 48) * Math.pow(10, numStr.length - i - 1);
    }
    result = isNegative ? 0 - result : result;
    return isNegative ? Math.max(MIN, result) : Math.min(MAX, result);
};

const res = myAtoi("0-1");
debugger;
