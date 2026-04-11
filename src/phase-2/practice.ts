
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

// function printId(id: number | string) {
//     if (typeof id == 'string') {
//       id.toUpperCase()
//     }
//     if (typeof id == 'number') {
//         id.toFixed()
//     }
//     console.log(id)
// }
// printId("iawjbailaedsadkls")
// printId(200.00000)

// type Person = {
//   name: string;
// };

// type Employee = {
//   id: number;
// };

// type Staff = Person & Employee;


// type SuccessResponse = {
//   status: "success";
//   data: string;
// };

// type ErrorResponse = {
//   status: "error";
//   message: string;
// };

// type ApiResponse = SuccessResponse | ErrorResponse;
// function handleResponse(res: ApiResponse) {
//   if (res.status === "success") {
//     console.log(res.data);
//   } else {
//     console.log(res.message);
//   }
// }
// handleResponse({
//     message: "hello message",
//     status: "error"
// })
// handleResponse({
//     status: "success",
//     data: "data"
// })

// type User = { name: string, age: number };
// type Admin = { role: string };

// function checkUser(user: User | Admin) {
//   if ("role" in user) {
//     console.log(user.role);
//   } else {
//     console.log(user.name);
//   }
// }

// custom type gurd
// type Fish = {
//     swim: () => void
// }
// type Bird = {
//     bird: () => void
// }
// function isFish(animal: Fish | Bird): animal is Fish{
//     return (animal as Fish).swim !== undefined;
// }
// function move(animal: Fish | Bird) {
//     if (isFish(animal)) {
//         animal.swim()
//     } else {
//         animal.bird()
//     }
// }