// Greedy from the left to right => if curr's rating > left'rating and curr's candies <= left's candies
// => curr's candies = left's candies + 1

// Greedy from the right to left => if curr's rating > right'rating and curr's candies <= right's candies
// => curr's candies = right's candies + 1

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
    const childWithCandies = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (
            ratings[i] > ratings[i - 1] &&
            childWithCandies[i] <= childWithCandies[i - 1]
        ) {
            childWithCandies[i] = childWithCandies[i - 1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (
            ratings[i] > ratings[i + 1] &&
            childWithCandies[i] <= childWithCandies[i + 1]
        ) {
            childWithCandies[i] = childWithCandies[i + 1] + 1;
        }
    }
    return childWithCandies.reduce((total, child) => total + child, 0);
};

const ratings = [1, 2, 2];
console.log(candy(ratings));
