const lengthOfLongestSubString = (s: string): number => {
  const n = s.length;
  let [left, max_length] = [0, 0];
  const set = new Set();

  for (let right = 0; right < n; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    max_length = Math.max(max_length, set.size);
  }

  return max_length;
};
