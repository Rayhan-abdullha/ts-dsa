
class Node<T> {
    value: T;
    next: Node<T> | null ;
    constructor(value: T){
        this.value = value
        this.next = null
    }
}
class LinkedList<T> {
    private head: Node<T> | null = null
    private tail: Node<T> | null = null
    push(value: T){
        const newNode = new Node<T>(value)
        if (!this.head){
            this.head = this.tail = newNode
            return newNode
        }
        this.tail!.next = newNode
        this.tail = newNode
        console.log(this.tail)
    }
    print(){
        let temp = this.head
        while (temp) {
            console.log(temp.value)
            temp = temp.next
        }
    }
}
const linkedList = new LinkedList<number>()
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.push(30)
linkedList.push(500)

// linkedList.print()
const user: any = {
    username: 'abir',
    age: 22,
    address: {
        division: "barisal",
        dist: "bhola",
    },
    location: {
        lat: 41542,
        lon: 651412
    }
}
let tail = user
const x = {x: 10}

tail.x = x
tail = x
console.log(user)
console.log(tail)
tail.b = 30
console.log(user)