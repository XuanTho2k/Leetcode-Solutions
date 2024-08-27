// Solution 1: Time - O(n), Space - O(n)
const evalRPN = (tokens: string[]) => {
  const stack: number[] = [];

  for (const t of tokens) {
    if ("+-*/".includes(t)) {
      let a: number, b: number;
      [b, a] = [stack.pop()!, stack.pop()!];

      switch (t) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          const division = a / b;
          if (division < 0) {
            stack.push(Math.ceil(division));
          } else {
            stack.push(Math.floor(division));
          }
          break;
      }
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack[0];
};
