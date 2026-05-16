function twoSum(nums: number[], target: number) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]!;
    const complement = target - val; // target is 6 val is 3 , so need 3
    if (complement == 0) return [i];
    if (map.has(complement)) {
      // if map has complement(3), return [complement index, current i]
      return [map.get(complement), i];
    }

    map.set(val, i);
  }
}
console.log(twoSum([19, 2, 7, 3, 9], 9));
