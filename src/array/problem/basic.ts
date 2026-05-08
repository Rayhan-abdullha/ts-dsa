
let arr = [10, 20, 50, 40, 50, 30, 40]

function findMaxAndMaxOccurs(arr: number[]): string{
    let findMax = 0
    let freq = new Map()
    for (const item of arr){
        if (item > findMax || findMax === item){
            findMax = item
            freq.set(item, (freq.get(item) ?? 0)+1)
        }        
    }
    return `Maximum is ${findMax}. ${findMax} occurs ${freq.get(findMax)} time.`
}
console.log(findMaxAndMaxOccurs(arr))


function missingNumber(nums: number[]){
    let misNumber: number[] = []
    for (const num of nums){
        misNumber[num] = num as number
    }
    for (let i = 0; i <= misNumber.length; i++){
       const val = misNumber[i]
         if (val === undefined){{
            return i
         }
    }
    }
};
missingNumber([3, 0, 1])


const arr1 = [10, 20, 30, 40, 50]
const insert = 50
const position = 3

function insertByPosition(arr: number[], insert: number, pos: number){
    if (arr.length < pos){
        console.log('invalid position provided!')
        return
    }
    if (pos < 0){
        console.log('invalid position provided!')
        return
    }
    for (let i = 0; i < arr.length; i++){
        if (i === pos){
            arr[i] = insert
            break
        }
    }
    return arr
}
console.log(insertByPosition(arr1, insert, position))


const arr12 = [10, 20, 50, 40, 50, 10, 40]
const freq = new Map()
function printFreqValueOnlyOne(arr: number[]){
    for (const element of arr) {
        if (!freq.has(element)){
            freq.set(element, element)
        }
    }
    freq.forEach(v => console.log(v))
}
printFreqValueOnlyOne(arr12)



const arr3 = [10, 12, 20, 25, 13, 10, 9, 40, 60, 5]
function checkIsInputExist(arr: number[], check: number){
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (val === check){
            return i
        }
    }
}
console.log(checkIsInputExist(arr3, 13))