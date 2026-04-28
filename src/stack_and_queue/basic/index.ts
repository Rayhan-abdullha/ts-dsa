// stack and queue implemented using array

class Stack<T> {
    private items: T[] = []
    push(value: T){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peak(): T | string | undefined{
        if (this.isEmpty()){
            return "item is empty"
        }
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items)
    }
}
const stack = new Stack<number>()
stack.push(10)
stack.push(20)
stack.push(30)
// console.log(stack.peak())
stack.pop()
// stack.print()

class Queue<T> {
  private items: T[] = [];

  enqueue(value: T): void {
    this.items.push(value);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// console.log(queue.front());   // 10
// console.log(queue.dequeue()); // 10
// console.log(queue.dequeue()); // 20


// implement using linked list
class Node<T>{
    value: T;
    next: Node<T> | null;
    constructor(value: T){
        this.value = value
        this.next = null
    }
}
class StackLinkedList<T>{
    private head: Node<T> | null = null
    private size: number = 0
    push(value: T){
        const newNode = new Node<T>(value)
        if (!this.head){
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
    pop(): T | null{
        if (!this.head){
            return null
        }
        const top = this.head.value
        this.head = this.head.next
        this.size--
        return top
    }
    peek(){
        if (this.head == null){
            return null
        }
        return this.head.value
    }
     isEmpty(): boolean {
        return this.size === 0;
    }
    getSize(): number {
    return this.size;
  }
  print(){
    let temp = this.head
    while(temp){
        console.log(temp.value)
        temp = temp.next
    }
  }
}
const stackLinkedList = new StackLinkedList<number>();

// stackLinkedList.push(10);
// stackLinkedList.push(20);
// stackLinkedList.push(30);

// console.log(stackLinkedList.peek()); // 30

// stackLinkedList.print()


// queue emplement by linked list

class QueueNode<T>{
    value: T;
    next: QueueNode<T> | null
    constructor(value: T){
        this.value = value
        this.next = null
    }
}

class QueueLinkedList<T>{
    private head: QueueNode<T> | null;
    private tail: QueueNode<T> | null;
    private size: number = 0
    constructor(){
        this.head = null
        this.tail = null
    }
    enqueue(value: T){
        const newNode = new QueueNode<T>(value)
        if (this.head == null){
            this.head = newNode
            this.tail = newNode
            return newNode
        }
        this.tail!.next = newNode
        this.tail = newNode
    }
    dequeue(){
        if (this.head == null){
            return null
        }
        const top = this.head.value
        this.head = this.head.next
        this.size--
        return top
    }
    front(){
        if (!this.head){
            return null
        }
        return this.head.value
    }
    isEmpty(){
        return this.size <= 0 ? true : false
    }
    print(){
        console.log(this.head)
    }
}
const queueLinkedList = new QueueLinkedList<number>()
queueLinkedList.enqueue(10)
queueLinkedList.enqueue(20)
queueLinkedList.dequeue()
console.log(queueLinkedList.front())
queueLinkedList.print()
