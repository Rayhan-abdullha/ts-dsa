/*
👉 Level: Basic
✅ Problem: Count Even Numbers

👉 Problem Statement:
Given an array of numbers, count how many even numbers are in the array.

👉 Example:

Input: [1, 2, 3, 4, 6]
Output: 3

👉 Hint:
Loop through the array
Check: number % 2 === 0
Increase count when condition is true
*/

function countEvenNumbers(arr: number[]): number {
    return arr.reduce((acc, curr) => {
        return curr % 2 === 0 ? acc + 1 : acc
    }, 0)
}
console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9,10]))