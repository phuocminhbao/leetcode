/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        const newCon = Math.min(height[l], height[r]) * (r - l);
        max = Math.max(max, newCon);
        if (l < r) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};

console.log(maxArea([8, 7, 2, 1]));
