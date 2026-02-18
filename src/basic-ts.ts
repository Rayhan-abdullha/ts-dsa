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


// type User = {
//     id: number;
//   name: string;
//   age: number;
// };

// function CreateUser(name: string, age: number): User {
//   return {
//       id: 1,
//     name,
//     age
//   }
// }
// const user = CreateUser("Rayhan", 22);
// console.log(user);


// type FormField = {
//   id: string;
//   label: string;
//   value: string | number | boolean;
//   required: boolean;
// };

// const fields: FormField[] = [
//   { id: "email", label: "Email", value: "", required: true },
//   { id: "age", label: "Age", value: 25, required: false },
// ];

// fields.forEach((field) => {
//   console.log(field);
// });


// type ErrorResponse = {
//   status: boolean
//   error: string
// }
// type SuccessResponse = {
//   status: boolean
//   error: false
//   data: string
// }
// type ApiResponse = ErrorResponse | SuccessResponse
// function ResponseData(res: ApiResponse) {
//   if (typeof res.error === 'boolean') {
//     console.log(res.data)
//   } else {
//     console.log(res.error)
//   }
// }
// ResponseData({status: true, error: false, data: "all data is fatched.."})
// ResponseData({status: false, error: "somthing went to wrong.."})
// let data: unknown;

// data = "Hello"; // Valid
// data = 123;     // Valid
// data = "5454"

// if (typeof data === 'string') {
//   console.log(data.toUpperCase())
// }
// if (typeof data === 'number') {
//   console.log(data.toFixed())
// }

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// function isUser(data: unknown): data is User {
//   return (
//     typeof data === "object" &&
//     data !== null &&
//     "id" in data &&
//     typeof (data as any).id === "number" &&
//     "name" in data &&
//     typeof (data as any).name === "string" &&
//     "email" in data &&
//     typeof (data as any).email === "string"
//   );
// }
// type APIResponse<T> = {
  
// }
// async function fetchUser(url: string): Promise<User | null> {
//   const response = await fetch(url);
//   const data: unknown = await response.json();

//   if (isUser(data)) {
//     return data; // TypeScript now knows `data` is of type `User`
//   } else {
//     console.error("Invalid User format", data);
//     return null;
//   }
// }

// fetchUser("https://jsonplaceholasfer.typicode.com/users/1").then((user) => {
//   if (user) {
//     console.log(user);
//   }
// }).catch((error: Error) => {
//   if (typeof error.message === "string") {
//     console.error(error.message);
//   } else {
//     console.error("Unknown error:", error);
//   }
// });


// interface ApiResponse<T> {
//   success: boolean
//   data: T
// }
// type User = {
//   id: string
//   name: string
// }
// const res1: ApiResponse<User> = {
//   success: true,
//   data: {
//     id: "1",
//     name: "Rayhan"
//   }
// }
// console.log(res1);


// function getId <T extends { id: string | number }>(obj: T) {
//   return obj.id
// }
// const res = getId({id: 1, name: "abir"})

// type User = {name: string, age: number}
// function merge<T, U>(a: T, b: U): User {
//   return {
//     name: a as string,
//     age: b as number
//   }
// }
// merge<string, number>("abir", 33)


// function merge<T, U>(a: T, b: U) {
//   return { ...a, ...b };
// }

// const result = merge({ name: "Rayhan" }, { age: 26 });

// type User = {
//   id: number;
//   name: string;
// };

// type Product = {
//   id: number;
//   title: string;
// };

// interface ApiResponse<T> {
//   success: boolean;
//   data: T;
// }

// const userResponse: ApiResponse<User> = {
//   success: true,
//   data: { id: 1, name: "Rayhan" }
// };

// const productResponse: ApiResponse<Product[]> = {
//   success: true,
//   data: [
//     { id: 1, title: "Laptop" },
//     { id: 2, title: "Mouse" }
//   ]
// };

// type Admin = { name: string; role: "admin", edit: true };
// type User = { name: string; role: "user", view: true };

// function checkPerson(person: Admin | User) {
//   if (person.role == "admin") {
//     console.log("Admin can ", person.edit && "edit");
//   } else {
//     console.log("User can ", person.view && "view");
//   }
// }
// checkPerson({name: "rayhan", role: "admin", edit:true})
// checkPerson({name: "rayhan", role: "user", view: true})

// type User = { name: string; age: number };
// type UpdateUser = Partial<User>;

// const updateUser: UpdateUser = {
//   name: "coder"
// }
// console.log(updateUser);

// type Config = {
//   port?: number;
//   host?: string;
// };

// type FullConfig = Required<Config>;
// const config: FullConfig = {
//   port: 8081,
//   host: "my user"
// }

// type User = {
//   id: number;
//   name: string;
// };

// const user: Readonly<User> = { id: 1, name: "Rayhan" };
// console.log(user);


// type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// };

// type PublicUser = Pick<User, "name">;
// const userRes: PublicUser = {
//   name: "rayhan"
// }
// console.log(userRes);

// type UserWithoutPassword = Omit<User, "password">;
// type Roles = "admin" | "user" | "moderator";

// const permissions: Record<Roles, string[]> = {
//   admin: ["create", "delete", "update"],
//   user: ["read"],
//   moderator: ["read", "update"],
// };



