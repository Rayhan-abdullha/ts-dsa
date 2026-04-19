const str = "hello world"

// const revStr = (str: string) => {
//     let backWord = ''
//     for (let i = str.length-1; i >= 0; i--) {
//         backWord += str[i]
//     }
//     console.log(backWord)
// }
// revStr(str)

// lets breakdown
// input: "hello world"
// len will be str.length / 2
// const revStr1 = (str: string): string => {
//     const arr = str.split("");

//     for (let i = arr.length - 1, j = 0; i > arr.length / 2; i--, j++) {
//         const firstVal = arr[j]!;
//         const lastVal = arr[i]!;

//         arr[i] = firstVal;
//         arr[j] = lastVal;
//     }

//     return arr.join("");
// };

// console.log(revStr1("hello"));

const revStr2 = (str: string) => {
    return str.split('').reverse().join('')
}
const res = revStr2("hello world")
console.log(res)