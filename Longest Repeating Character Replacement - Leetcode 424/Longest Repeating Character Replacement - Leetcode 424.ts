const characterReplayment = (s: string, k: number): number => {
  const n = s.length;
  const counts = Array(26).fill(0);
  let [left, ans, max_count] = [0, 0, 0];

  for (let right = 0; right < n; right++) {
    max_count = Math.max(max_count, ++counts[s.charCodeAt(right) - 65]);

    while (right - left + 1 - max_count > k) {
      counts[s.charCodeAt(left) - 65]--;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
