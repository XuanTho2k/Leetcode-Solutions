const characterReplayment = (s: string, k: number): number => {
  const n = s.length;
  const m = Array(26).fill(0);
  let [left, longest, max_count] = [0, 0, 0];

  for (let right = 0; right < n; right++) {
    max_count = Math.max(max_count, ++m[s.charCodeAt(right) - 65]);

    while (right - left + 1 - max_count > k) {
      m[s.charCodeAt(left) - 65]--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
