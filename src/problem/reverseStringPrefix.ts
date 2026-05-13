function reversePrefix(s: string, k: number): string {
  if (s.length < k) {
    return "";
  }
  if (s.length == 1) {
    return s;
  }
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i]!;
    if (i == k - 1) {
      for (let j = k - 1; j != -1; j--) {
        const ch = s[j]!;
        res.push(ch);
      }
    }
  }
  for (let i = k; i < s.length; i++) {
    const t = s[i]!;
    res.push(t);
  }
  return res.join("");
}
reversePrefix("abcdefg", 2);
