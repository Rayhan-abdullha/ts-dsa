/*
    Task 1: The "Optional" Shopping Cart EASY
    Concepts: Destructuring, Optional Properties, Default Values
    Scenario: You are building a checkout system. Users might buy one item by default,
    or specify a bulk quantity.

    type CartItem = {
    name: string;
    price: number;
    quantity?: number;
    };

    Instructions:
    Write a function calculateTotal that takes a CartItem object.
    Use Destructuring to extract properties.
    If quantity is missing, ensure the calculation treats it as 1.
    Return the total cost (price * quantity).
    Hint: Set a default value during destructuring: { quantity = 1 } = item.
*/
// solution
type CartItem = {
    name: string;
    price: number;
    quantity?: number
}
function calculateTotal(cartItem: CartItem){
    const {name, price, quantity = 1} = cartItem
    const total = price * quantity
    return total.toFixed(2)
}
const cartTotal = calculateTotal({
    name: "MacBook Pro M5",
    price: 250000,
    quantity: 2
})
// console.log(cartTotal)

/*
    Task 2: Merging User Profiles EASY
    Concepts: Intersection Types (&)
    Scenario: A user signs up as a basic Person, but when hired, they gain
    JobDetails. An Employee is a union of both.

    type Person = { name: string; age: number };
    type JobDetails = { role: string; salary: number };

    Instructions:
    Create a new type Employee that combines Person and JobDetails.
    Write a function getProfile that accepts an Employee.
    Return a string: "Name: [name], Role: [role]".
    Hint: Use the & operator to merge the two types.
*/
// solution
type Person = {name: string; age: number}
type JobDetails = {role: string; salary: number}
type Employee = Person & JobDetails
function getProfile(employee: Employee): string{
    return `Name: ${employee.name}, Role: ${employee.role}`
}
const res = getProfile({
    name: "Rayhan Abdullah",
    age: 28,
    role: "Employee",
    salary: 75000
})
// console.log(res)

/*
    Task 3: The "Safe" Data Fetcher MEDIUM
    Concepts: Optional Chaining (?.), Nullish Coalescing (??)
    Scenario: API responses can be unpredictable. You need to safely access a deep
    property without causing a crash.

    type UserResponse = {
    info?: {
    address?: {
    zipCode?: string;
    }
    }
    };

    Instructions:
    Write a function getZipCode that reaches deep into the object.
    If any part of the path is missing, or if the zipCode is null/undefined, return
    "00000".

    Hint: Chain ?. for every level and end with ?? "00000".
*/
// solution
type UserResponse = {
    info?: {
        address?: {
            zipcode?:string
        }
    }
}
function getZipCode(res: UserResponse){
    return res.info?.address?.zipcode ?? "00000"
}
const res1 = getZipCode({
    info: {
        address: {
            zipcode: "coder"
        }
    }
})
// console.log(res1)

/*
     Task 4: Type Assertion MEDIUM
    Concepts: Type Assertion (as), unknown type
    Scenario: You receive a value from a 3rd-party library typed as unknown. You are
    certain it's a string and need to manipulate it.

    let secretValue: unknown = "typescript is awesome";

    Instructions:
    Create a variable upperValue.
    Assign secretValue to it using Type Assertion.
    Call .toUpperCase() on the resulting value.
    Hint: Use the value as string syntax.
 */
// solution
let secretValue: unknown = "typescript is awesome";
let upperValue: string = (secretValue as string).toUpperCase()
// console.log(upperValue)

/*
    Task 5: Generic Constraints MEDIUM
    Concepts: Generics, Extends Constraint
    Scenario: You want a function that logs the length of various inputs (strings, arrays)
    but rejects types that don't have a .length.
    Instructions:
    Write a generic function logLength<T>(input: T).
    Constrain T to ensure it must have a length property of type number.
    Return the length value.
    Hint: Use <T extends { length: number }>.
*/
// solution
function logLength<T extends {length: number}>(input: T): number{
    // console.log(input.length)
    return input.length    
}
logLength<string[]>(["A", "B", "C"])
logLength<string>("hello world")
logLength<{length: number}>({length: 10})

/*
    Task 6: The Property Guard HARD
    Concepts: keyof, Generics
    Scenario: Create a utility that gets a property from an object while preventing typos
    at compile-time.

    const product = { id: 101, name: "Keyboard", price: 50 };

    Instructions:
    Create a function getProductProp<T, K>(obj: T, key: K).
    Constraint K to be a valid key of T.
    Return obj[key].
    Hint: Use <T, K extends keyof T>.
*/
// solution
type Product = {
    id: number;
    name: string;
    price: number
}
function getProductProp<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}
const product = { id: 101, name: "Keyboard", price: 50 };
const getProduct = getProductProp<Product, keyof Product>(product, 'name')
// console.log(getProduct)

/**
    Task 7: Constant Literal Types HARD
    Concepts: as const, typeof, Index Access Types
    Scenario: Define fixed theme colors that serve as the single source of truth for your
    application.

    const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
    } as const;

    Instructions:
    Create a type ValidColor derived directly from the values of the Colors
    object.
    Write a function setColor(c: ValidColor) that only accepts "RED" or
    "BLUE".

    Hint: type ValidColor = typeof Colors[keyof typeof Colors].
*/
// solution
const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
} as const
type ValidColor = typeof Colors[keyof typeof Colors]
// type IColor = "RED" | "BLUE"
function setColor(c: ValidColor){
    console.log(c)
}
setColor("RED")

/*
    Task 8: The "Draft" Mode HARD
    Concepts: Mapped Types, Readonly, Optional
    Scenario: Transform a strict interface into a "Draft" version where everything is
    optional and immutable.

    interface MyDocument {
    title: string;
    content: string;
    author: string;
    }

    Instructions:
    Create a Mapped Type Draft<T>.
    Iterate through all keys of T, making them readonly and ? (optional).
    Declare a variable myDraft of type Draft<MyDocument>.
    Hint: { readonly [P in keyof T]?: T[P] }.
*/
// solution
interface MyDocument {
    title: string;
    content: string;
    author: string;
}
type Draft<T> = {
    readonly [P in keyof T]?: T[P]
}
let myDraft: Draft<MyDocument> = {
    title: "Draft Title"
}
// myDraft.title = "New Title" // Error: Cannot assign to 'title' because it is a read-only property.

/*
    Task 9: The Wrapper HARD
    Concepts: Conditional Types
    Scenario: Create a type that acts as a logic gate, returning "Large" for arrays and
    "Small" for anything else.
    Instructions:
    Create a type DataType<T>.
    If T extends an array, the type should be "Large".
    Otherwise, it should be "Small".

    Hint: Use the ternary syntax: T extends any[] ? "Large" : "Small".
*/
// solution
type DataType<T> = T extends any[] ? "Large" : "Small";
type Test1 = DataType<string[]> // "Large"
type Test2 = DataType<number> // "Small"
const test1: Test1 = "Large"
const test2: Test2 = "Small"

/*
    Task 10: Utility Type (Omit) MEDIUM
    Concepts: Built-in Utility Types (Omit)
    Scenario: You need to strip sensitive data (like a password) from a user object
    before sending it to the UI.

    interface UserAccount {
    id: number;
    username: string;
    password: string;
    }

    Instructions:
    Create a type PublicUser using the Omit utility.
    Exclude the password field from UserAccount.
    Hint: Omit<UserAccount, "password">.
*/
// solution
interface UserAccount {
    id: number;
    username: string;
    password: string;
}
type PublicUser = Omit<UserAccount, "password">
const publicUser: PublicUser = {
    id: 1,
    username: "john_doe"
    // password: "secret" // Error: Object literal may only specify known properties, and 'password' does not exist in type 'PublicUser'.
}
console.log(publicUser)