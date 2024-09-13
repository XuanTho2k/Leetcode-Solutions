// Solution 1: T - O(nlogn), S - O(1)
const minEatingSpeed = (piles: number[], hours: number): number => {
  const canFinish = (speed: number): boolean => {
    let h = 0;
    for (const p of piles) {
      h += Math.ceil(p / speed);
    }

    return h <= hours;
  };

  const maxPile = piles.reduce((a, b) => Math.max(a, b), -Infinity);

  let [left, right] = [1, maxPile];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canFinish(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
