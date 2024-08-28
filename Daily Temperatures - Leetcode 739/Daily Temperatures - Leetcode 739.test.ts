import { dailyTemperatures } from "./Daily Temperatures - Leetcode 739";

describe("dailyTemperatures", () => {
  it("should return the correct number of days until a warmer temperature", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
  });

  it("should return an array of zeros for a non-increasing sequence", () => {
    expect(dailyTemperatures([90, 80, 70, 60])).toEqual([0, 0, 0, 0]);
  });
  it("should handle an empty array", () => {
    expect(dailyTemperatures([])).toEqual([]);
  });
  it("should handle an array with one element", () => {
    expect(dailyTemperatures([89])).toEqual([]);
  });
});
