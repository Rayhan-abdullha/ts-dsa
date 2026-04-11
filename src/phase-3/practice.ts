// function getValue<T>(value: T): T{
//     return value
// }
// const res = getValue<string>("Ts is most valuable programming language in this sector")
// console.log(res)

// const res1 = getValue<number>(125)
// console.log(res1)

// function getFirst<T>(arr: T[]): T | undefined {
//   return arr.length > 0 ? arr[0] : undefined;
// }
// const res = getFirst<string>(["Ts", "Js", "Python"])
// console.log(res)

// const res1 = getFirst<number>([1, 2, 3, 4])
// console.log(res1)

// function printValue<T extends {length: number}>(item: T): number {
//     return item.length
// }
// const len = printValue<string>("hello")
// const len1 = printValue<number[]>([1,2,3])
// console.log(len)
// console.log(len1)

// type ApiResponse<T> = {
//   success: boolean;
//   data: T;
// };
// type User = {
//     name: string
//     age: number
// }
// const res: ApiResponse<User[]> = {
//   success: true,
//     data: [
//       {name: "abir", age: 23}
//   ]
// };

// console.log(res.data[0]?.name)

// type A = { name: string };
// type B = { age: number };

// function check(obj: A | B) {
//   if ("name" in obj) {
//     console.log(obj.name);
//   } else {
//       console.log(obj.age)
//   }
// }