// let username: string = "Rayhan";
// let age: number = 25;

// let data: null = null;
// let value: undefined = undefined;
// console.log(data)
// console.log(value)

// let anything: any = "hello";
// anything = 123;
// anything = true;

// unknown better than any //
// let userInput: unknown = 333
// if (typeof userInput === 'string') {
//   console.log(userInput.toUpperCase()); // ✅ safe
// } else {
//     try {
//         const err = throwError("unknown type!")
//     } catch(err: unknown) {
//         if (err && (err as {message: string}).message) {
//             console.log((err as { message: string }).message);
//         }
//     }
// }

// never
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

// array
// const arr: Array<number> = [1, 2, 3, 4]
// const arr1: number[] = [3,4,5]
// console.log(arr1)

// tupple
// const arr: [number, string, number] = [2, "coder", 3]
// console.log(arr)

// const product: {
//   title: string;
//   price: number;
//   inStock: boolean;
// } = {
//   title: "Laptop",
//   price: 50000,
//   inStock: true
// };
// let data: string;
// data = "date"