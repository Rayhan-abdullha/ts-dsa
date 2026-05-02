// type assertion //
let anything: any;
anything = "Hello";
// anything = true
// anything = { name: "Abir" }
// anything = [1, 2, 3]
// anything = () => console.log("Hello")   
// anything()
// console.log((anything as string).toUpperCase())

let value: unknown = "Hello Typescript"
let strLength: number = (value as string).length // we know the value is strictly string thats why we can use tyep assertion
// console.log(strLength)


// Type interface ///

type isAdmin = boolean
const isAdmin: isAdmin = true

type User = {
    name: string
    age: number
}
type AdminUser = User & {
    access: "dashbaord"
}
const user: AdminUser = {
    name: "rayhan",
    age: 28,
    access: 'dashbaord'
}

// interface
interface IUser {
    name: string
    age: number
}
interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}
const user2: IUserWithRole = {
    name: "rayhan",
    age: 28,
    role: 'admin'
}
// console.log(user2)

// function
type Add = (a: number, b: number) => number
const add: Add = (a:number, b: number) => a + b
add(1, 20)
type Friends = string[]
const friends: Friends = ["A", "B"]

interface IFriends {
    [index: number]: string
}
const friends1: IFriends = ["A", "B"]
// console.log(friends1)