/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    if (n === 0) return [];
    const paranthesis = "()";
    if (n === 1) {
        return paranthesis;
    }
    const res = [];
    const generate = (open, close, str) => {
        if (open === n && close === n) {
            res.push(str);
            return;
        }
        if (open < n) {
            generate(open + 1, close, str + "(");
        }
        if (open > close) {
            generate(open, close + 1, str + ")");
        }
    };
    generate(0, 0, "");
    return res;
};

const r = generateParenthesis(3);
console.log(r);
