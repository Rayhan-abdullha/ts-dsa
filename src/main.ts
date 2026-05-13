// import './oop/oop';
// import './phase-1/practice'
// import './phase-2/practice'
// import './phase-3/practice'

// import './array/index'
// import './hash_table/index'
// import './linkedlist/index'
// import './stack_and_queue/index'

// import './practice/practice'
// import './practice/union_intresection'
// import './practice/practice'
// import './task/typescript-mastary/solution'
// import './oop/class'

/*
Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Sample Output:
"John Doe";

*/

class Node<T>{
    val: T
    left: Node<T> | null
    right: Node<T> | null
    constructor(val: T){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree<T> {
    root: Node<T> | null
    constructor(){
        this.root = null
    }
    insert(val: T){
        const newNode = new Node<T>(val)
        if (!this.root){
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while (true){
            if (currentNode.val < val){
                if (currentNode.right === null){
                    currentNode.right = newNode
                    return this
                } 
                currentNode = currentNode.right
            } else {
                if (currentNode.left === null){
                    currentNode.left = newNode
                    return
                }
                currentNode = currentNode.left
            }
        }
    }
    search(val: T){

    }
}


const bst = new BinarySearchTree<number>()
bst.insert(10)
bst.insert(20)
bst.insert(1)
bst.insert(2)
bst.insert(200)
// console.log(bst)

// console.log(maxFreqSum("og"));          // 2
// console.log(maxFreqSum("successes"));       // 1

function thirdMax(nums: number[]): number {
    let stack: number[] = []
    for (const val of nums){
        const top = (stack.length-1) as number
        if (top === -1){
            stack.push(val)
        } else {
            if (val > top){
                stack.push(val)
            }
        }
    }
    return stack[stack.length-1]!
};
thirdMax([3,2,1])