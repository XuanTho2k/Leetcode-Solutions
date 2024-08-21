// Solution 1: O(n)
const isPalindromeTS = function (s: string) {
  const filter = s.match(/[a-zA-Z0-9]/g);

  if (!filter) return true;

  const str = filter.join("").toLowerCase();

  const reversedStr = filter.reverse().join("").toLowerCase();

  if (str === reversedStr) return true;

  return false;
};

const isPalindromeTsOptimized = (s: string) => {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (!s[l].match(/^[a-z0-9]+$/i)) {
      l++;
      continue;
    }
    if (!s[r].match(/^[a-z0-9]+$/i)) {
      r--;
      continue;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
