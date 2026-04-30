
// class Node<T> {
//     value: T;
//     next: Node<T> | null ;
//     constructor(value: T){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList<T> {
//     private head: Node<T> | null = null
//     private tail: Node<T> | null = null
//     push(value: T){
//         const newNode = new Node<T>(value)
//         if (!this.head){
//             this.head = this.tail = newNode
//             return newNode
//         }
//         this.tail!.next = newNode
//         this.tail = newNode
//         console.log(this.tail)
//     }
//     print(){
//         let temp = this.head
//         while (temp) {
//             console.log(temp.value)
//             temp = temp.next
//         }
//     }
// }
// const linkedList = new LinkedList<number>()
// linkedList.push(10)
// linkedList.push(20)
// linkedList.push(30)
// linkedList.push(30)
// linkedList.push(500)

// // linkedList.print()
// const user: any = {
//     username: 'abir',
//     age: 22,
//     address: {
//         division: "barisal",
//         dist: "bhola",
//     },
//     location: {
//         lat: 41542,
//         lon: 651412
//     }
// }
// let tail = user
// const x = {x: 10}

// tail.x = x
// tail = x
// console.log(user)
// console.log(tail)
// tail.b = 30
// console.log(user)

// const arr = [1,2,3]
// const merge: number[] = []
// merge.push(1,2)
// console.log(merge)

// const user = {name: "messi", age: 37}
// const otherInfo = {hoby: "Plying football"}

// const userInfo = {...user, otherInfo}
// console.log(userInfo)

// function chat(...msg: string[]){
//     msg.forEach(m => console.log(m))
// }
// chat("hi", "hello", 'kemon achos?')

// const user = {
//     id: 123,
//     name: {
//         firstName: "Rayhan",
//         lastName: "Abdullah"
//     },
//     gender: "male"
// }
// const {name: {firstName, lastName}, gender} = user
// console.log(firstName, lastName)

// const [,,c, _] = [1,2,3,4]
// console.log(c)

// type AddFunc = (num: number, num1: number) => number

// const add: AddFunc = (num: number, num1: number) => num + num1
// add(1,2)

// type UserRole = 'admin' | 'user' | 'guest'
// const getDashboard = (role: UserRole) => {
//     if (role == 'admin'){
//         console.log('Dashboard')
//     } 
//     if (role == 'guest'){
//         console.log('Public Page')
//     } 
// }
// getDashboard("admin")

