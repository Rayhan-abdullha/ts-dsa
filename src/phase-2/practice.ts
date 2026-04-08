
const arr: Array<string | number> = ["coder", 124, "coder", "rayhan"]

function filterNumber(arr: Array<string | number>) {
    const numArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof element !== 'number') {
            continue
        } else {
            numArr.push(element)
        }
    }
    return numArr
}
console.log(filterNumber(arr))