const generateTabulation = (numRows) => {
    const res = [[1]];

    for (let rows = 1; rows < numRows; rows++) {
        const preRow = res[rows - 1];
        const row = [];
        for (let i = 0; i <= rows; i++) {
            row.push((preRow[i - 1] ?? 0) + (preRow[i] ?? 0));
        }
        res.push(row);
    }
    return res;
};

const generate1 = (numRows) => {
    if (numRows === 1) {
        return [[1]];
    }
    const preRow = generate1(numRows - 1);
    const row = [];
    for (let i = 0; i < numRows; i++) {
        row.push(
            (preRow[numRows - 1 - 1][i - 1] ?? 0) +
                (preRow[numRows - 1 - 1][i] ?? 0)
        );
    }
    return [...preRow, row];
};

const print = generate1(5);
console.log(print);
