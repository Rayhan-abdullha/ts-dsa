function firstRecurringCharacter(arr: number[]): number | null {
    const seen: Set<number> = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return null;
}
const res = firstRecurringCharacter([2, 5, 1, 2, 3, 5]); // Output: 2
// console.log(res);

// use a map to store the count of each number
function firstRecurringCharacter1(arr: number[]): number | null {
    const countMap: Map<number, number> = new Map();
    for (const num of arr) {
        if (countMap.has(num)) {
            return num;
        }
        countMap.set(num, 1);
    }
    return null;
}
const res1 = firstRecurringCharacter1([2, 5, 1, 2, 3, 5]); // Output: 2
// console.log(res1);


// function firstRecurringCharacter2(arr: number[]): number | null {

// }

// const res2 = firstRecurringCharacter2()
// console.log(res2)

