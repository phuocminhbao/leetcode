/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const findLengthPalindromeBaseOnMiddle = (midIndex) => {
    const midChar = s[midIndex];
    let palindrome = midChar;
    let left = midIndex - 1;
    let right = midIndex + 1;
    while (midChar === s[right]) {
      palindrome += s[right];
      right++;
    }
    if (right === s.length && midChar === s[left]) {
      palindrome = s[left] + midChar;
    }
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      palindrome = s[left] + palindrome + s[right];
      left--;
      right++;
    }
    return palindrome;
  };

  let maxPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    const palindrome = findLengthPalindromeBaseOnMiddle(i);
    maxPalindrome =
      palindrome.length > maxPalindrome.length ? palindrome : maxPalindrome;
  }
  return maxPalindrome;
};
