export const dailyTemperatures = (temperatures: number[]) => {
  const n = temperatures.length;
  const stack: number[][] = [];
  const ans: number[] = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const t = stack[stack.length - 1];
    while (stack.length > 0 && t[0] < temperatures[i]) {
      const stack_i = stack.pop()![1];
      ans[stack_i] = i - stack_i;
    }
  }

  return ans;
};
