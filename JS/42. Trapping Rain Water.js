/**
 * @param {number[]} height
 * @return {number}
 */
const trapMemoi = (heights) => {
    const maxLefts = [];
    const maxRights = [];
    const minLR = [];
    const generatemaxLefts = () => {
        let maxLeft = 0;
        heights.forEach((height, index) => {
            maxLefts[index] = maxLeft;
            maxLeft = Math.max(maxLeft, height);
        });
    };
    const generateMaxRights = () => {
        let maxRight = 0;
        for (let i = heights.length - 1; i >= 0; i--) {
            maxRights[i] = maxRight;
            maxRight = Math.max(maxRight, heights[i]);
        }
    };

    const generateMinOfLeftAndRight = () => {
        for (let i = 0; i < heights.length; i++) {
            minLR[i] = Math.min(maxLefts[i], maxRights[i]);
        }
    };
    generatemaxLefts();
    generateMaxRights();
    generateMinOfLeftAndRight();
    return minLR.reduce((total, currMin, index) => {
        const trapableWaterAmount = currMin - heights[index];
        return total + Math.max(0, trapableWaterAmount);
    }, 0);
};

const trap = (heights) => {
    let l = 0,
        r = heights.length - 1,
        maxLeft = heights[0],
        maxRight = heights[heights.length - 1],
        total = 0;
    while (l < r) {
        // move left
        if (maxLeft <= maxRight) {
            l++;
            const trapableWater = maxLeft - heights[l];
            total += Math.max(0, trapableWater);
            maxLeft = Math.max(maxLeft, heights[l]);
            continue;
        }
        // move right
        r--;
        const trapableWater = maxRight - heights[r];
        total += Math.max(0, trapableWater);
        maxRight = Math.max(maxRight, heights[r]);
    }
    return total;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
