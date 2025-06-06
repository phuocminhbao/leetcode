// Code
// Testcase
// Test Result
// Test Result
// 3. Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const sArr = s.split("");
  let maxlength = 0;
  let str = "";
  sArr.forEach((char) => {
    if (str.includes(char)) {
      const duplicateIndex = str.indexOf(char);
      str = str.slice(duplicateIndex + 1);
    }
    str += char;
    maxlength = maxlength > str.length ? maxlength : str.length;
  });
  return maxlength;
};

const res1 = lengthOfLongestSubstring("abcabcbb") === 3;
const res2 = lengthOfLongestSubstring("bbbbb") === 1;
const res3 = lengthOfLongestSubstring("pwwkew") === 3;
const res4 = lengthOfLongestSubstring("dvdf") === 3;

console.log([res1, res2, res3, res4]);
