const arr = [12, 11, 13, 5, 6];

function insertionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]!;
    for (let j = 0; j < arr.length; j++) {
      const el = arr[j]!;
      if (element > el) {
        arr[i] = el;
        arr[j] = element;
      }
    }
  }

  return arr;
}
console.log(insertionSort(arr));
