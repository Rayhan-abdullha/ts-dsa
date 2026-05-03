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