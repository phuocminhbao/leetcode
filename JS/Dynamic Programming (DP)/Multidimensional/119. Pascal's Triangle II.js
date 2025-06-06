/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    const triangle = [[1]];
    for (let i = 1; i <= rowIndex; i++) {
        const preRow = triangle[i - 1];
        const row = [];
        for (let j = 0; j <= i; j++) {
            row.push((preRow[j - 1] ?? 0) + (preRow[j] ?? 0));
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
};

const res = getRow(1);
console.log(res);
