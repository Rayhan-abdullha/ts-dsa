function findWordsContaining(words: string[], x: string): number[] {
  let res = new Set<number>();
  for (let i = 0; i < words.length; i++) {
    const word = words[i]!;
    for (let j = 0; j < word.length; j++) {
      const char = word[j]!;
      if (char === x) {
        res.add(i);
      }
    }
  }
  return Array.from(res);
}
findWordsContaining(["hello", "world", "hi", "test"], "o"); // [0, 1]
findWordsContaining(["apple", "banana", "cherry"], "a");
