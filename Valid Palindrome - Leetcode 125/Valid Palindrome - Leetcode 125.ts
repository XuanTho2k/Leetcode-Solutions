// Solution 1: O(n)
const isPalindrome = function (s) {
  const filter = s.match(/[a-zA-Z0-9]/g);

  if (!filter) return true;

  const str = filter.join("").toLowerCase();

  const reversedStr = filter.reverse().join("").toLowerCase();

  if (str === reversedStr) return true;

  return false;
};
