import MinStack from "./Min Stack - Leetcode 155";

describe("MinStack", () => {
  let minStack: MinStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  test("should push elements onto the stack ", () => {
    minStack.push(1);
    minStack.push(1);
    expect(minStack["stack"]).toEqual([1, 1]);
  });
  test("should pop elements onto the stack ", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.pop();
    expect(minStack["stack"]).toEqual([1]);
  });
  test("should return the top elements ", () => {
    minStack.push(1);
    minStack.push(2);
    expect(minStack["stack"]).toEqual([2]);
  });
  test("should return the minimum elements ", () => {
    minStack.push(2);
    minStack.push(1);
    expect(minStack.getMin()).toEqual([1]);
    minStack.pop();
    expect(minStack.getMin()).toEqual([2]);
  });
  test("should handle edge cases ", () => {
    // it should throw exception
    expect(() => minStack.getMin()).toThrow();
    expect(() => minStack.top()).toThrow();
  });
});
