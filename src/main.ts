// enum Status {
//   Success = "success",
//   Error = "error",
//   Pending = "pending"
// }

// let orderStatus: Status = Status.Success




// let direction: "up" | "down" | "left" | "right"

// direction = "up"   // ✅
// direction = "down" // ✅


// type User = { name: "string" }
// type Admin = { role: "string" }
// type AdminUser = User & Admin & {
//   isActive: boolean
// }


// function printValue<T>(value: T): T {
//   return value
// }
// const res = printValue("coder")
// const res1 = printValue({name: 'coder', age: 22})


// function getFirstItem<T>(items: T[]): T {
//   return items;
// }

// const first = getFirstItem([10, 20, 30]);
// const firstName = getFirstItem(["Rayhan", "Coder"]);


// const users: number[] = [1, 2, 3, 4, 5]

// const res: string[] = users.map(v => v.toString())
// console.log(res);


// const car: {name: string} = {
//   name: 'js'
// }
// const cloneCar: {name: string} = { ...car }
// console.log(cloneCar.name);


// let anything: any
// anything = "coder"
// console.log((anything as string).toUpperCase());
// type UnionType = Type1 | Type2 | Type3;

// // Use Case 1: Flexible Function Arguments
// function formatValue(value: string | number): string {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }
//   return value.toFixed(2);
// }

// console.log(formatValue("hello")); // HELLO
// console.log(formatValue(42));      // 42.00
// console.log(formatValue(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// Use Case 2: API Responses
// type ErrorResponse = {
//   error: true;
//   message: string;
// };

// type SuccessResponse = {
//   error: false;
//   data: string;
// };

// type ApiResponse = ErrorResponse | SuccessResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.error) {
//     console.error(response.message);
//   } else {
//     console.log(response.data);
//   }
// }


type User = {
    id: number;
  name: string;
  age: number;
};

// function CreateUser(name: string, age: number): User {
//   return {
//       id: 1,
//     name,
//     age
//   }
// }
// const user = CreateUser("Rayhan", 22);
// console.log(user);

