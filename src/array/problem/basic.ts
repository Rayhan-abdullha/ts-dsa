
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