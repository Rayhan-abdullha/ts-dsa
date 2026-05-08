const arr = [-7, 2, 3, 8, 6, 6 ,75, 38, 3, 2]
function findSecondLargestNumber(arr: number[]){
    let stack = []
    let findMostMax = Math.max(...arr)
    let secondMax = 0
    for (const n of arr){
        if (n > secondMax && n !== findMostMax){
            secondMax = n
        }
    }
    return secondMax
}
console.log(findSecondLargestNumber(arr))