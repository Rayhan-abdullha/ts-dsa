
// const arr: Array<string | number> = ["coder", 124, "coder", "rayhan"]

// function filterNumber(arr: Array<string | number>) {
//     const numArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof element !== 'number') {
//             continue
//         } else {
//             numArr.push(element)
//         }
//     }
//     return numArr
// }
// console.log(filterNumber(arr))


// const filterNumber = [1, 2, "coder"].filter(e => typeof e === 'number')
// console.log(filterNumber)

// function greet(name: string, age: number = 123) {
//     console.log(name)
// }
// greet("coder")

// function sum(...num: number[]) {
//     return num.reduce((acc, curr) => acc += curr ,0)
// }
// console.log(sum(1,2,3,4,5))