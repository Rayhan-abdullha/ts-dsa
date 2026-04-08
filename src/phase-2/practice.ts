
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

// function process(
//   a: number,
//   b: number,
//   callback: (x: number, y: number) => number
// ) {
//     const res = callback(a, b)
//     console.log(res)
// }

// function fb(a: number, b: number): number {
//     return a + b
// }
// process(1, 2, fb)
// type Person = {
//     name: string
//     age: number
// }
// type Sakib = Person & {
//     occ: string
// }
// const sakib: Sakib = {
//     name: "sakib",
//     age: 37,
//     occ: "crickter"
// }
// console.log(sakib)