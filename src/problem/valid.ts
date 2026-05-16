function isValid(s: string): boolean {
  const stack = []; // (

  const closeToOpen: {
    [index: string]: string;
  } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const c of s) {
    const t = closeToOpen[c] as string;
    if (t) {
      const top = stack[stack.length - 1];
      if (top && top === t) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
console.log(isValid("()"));
