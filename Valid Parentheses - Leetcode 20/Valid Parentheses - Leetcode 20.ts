// Solution 1: Time - O(n), Space - O(n)
const isValid = (s: string) => {
  const stack: string[] = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return !stack.length;
};

// Solution 2: Time - O(n^2), Space - O(n^2)
const isValid = (s: string) => {
  const str2 = s.replace("()", "").replace("{}", "").replace("[]", "");

  return s != str2 ? isValid(str2) : !s;
};
