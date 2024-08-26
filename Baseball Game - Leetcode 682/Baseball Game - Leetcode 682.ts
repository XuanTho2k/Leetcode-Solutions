const calPoints = (operations) => {
  const n = operations.length;
  const stack: number[] = [];

  for (const o of operations) {
    if (o === "C") {
      stack.pop();
    } else if (o === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (o === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(parseInt(o));
    }
  }

  return stack.reduce((arr, value) => arr + value, 0);
};
