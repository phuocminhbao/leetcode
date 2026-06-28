/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = (arr) => {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    let i = 1;
    while (i < arr.length) {
        if (Math.abs(arr[i] - arr[i - 1]) <= 1) {
            i++;
            continue;
        }
        arr[i] = arr[i - 1] + 1;
        i++;
    }
    return arr[arr.length - 1];
};
