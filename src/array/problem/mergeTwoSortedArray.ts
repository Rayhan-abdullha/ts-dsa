const arr = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]


// best interview solution
function mergeTwoSortedArray(arr: number[], arr1: number[]) {
    let i = 0;
    let j = 0;
    const result: number[] = [];

    while (i < arr.length && j < arr1.length) {
        if (arr[i]! < arr1[j]!) {
            result.push(arr[i]!);
            i++;
        } else {
            result.push(arr1[j]!);
            j++;
        }
    }

    while (i < arr.length) {
        result.push(arr[i]!);
        i++;
    }

    while (j < arr1.length) {
        result.push(arr1[j]!);
        j++;
    }

    return result;
}
const res = mergeTwoSortedArray(arr, arr2)
console.log(res)
