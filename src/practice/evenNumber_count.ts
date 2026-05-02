   
function countEvenNumbers(arr: number[]): number {
    return arr.reduce((acc, curr) => {
        return curr % 2 === 0 ? acc + 1 : acc
    }, 0)
}
console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9,10]))