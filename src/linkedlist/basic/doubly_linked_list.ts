class Node<T> {
    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    length: number = 0;
    head: Node<T> | null = null;
    tail: Node<T> | null = null;

    append(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link with current tail
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;        // Update tail
        }

        this.length++;   // ← Important!
    }

    // Better print method for testing
    print(): void {
        let current = this.head;
        const values: T[] = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values);   // Output: [10, 20, 30, ...]
    }

    // Optional: Print backward (from tail)
    printBackward(): void {
        let current = this.tail;
        const values: T[] = [];

        while (current) {
            values.push(current.value);
            current = current.prev;
        }

        console.log("Backward:", values);
    }
}


const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.print();          // Output: [10, 20, 30]
list.printBackward();  // Output: Backward: [30, 20, 10]
console.log(list.tail)