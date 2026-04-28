class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length: number = 0;

  // ✅ O(1)
  prepend(value: T) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // important
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // ✅ O(1) (optimized using tail)
  push(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // ✅ O(n)
  pop(): T | null {
    if (!this.head) return null;

    let prev: Node<T> | null = null;
    let curr = this.head;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    if (!prev) {
      // only one element
      this.head = null;
      this.tail = null;
    } else {
      prev.next = null;
      this.tail = prev; // fix
    }

    this.length--;
    return curr.value;
  }

  // ✅ O(n)
  lookup(value: T): boolean {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }

    return false;
  }

  // ✅ O(n)
  delete(value: T): boolean {
    if (!this.head) return false;

    let prev: Node<T> | null = null;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        if (!prev) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }

        if (curr === this.tail) {
          this.tail = prev;
        }

        this.length--; // ✅ only when deleted
        return true;
      }

      prev = curr;
      curr = curr.next!;
    }

    return false;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const list = new LinkedList<number>();

list.push(10);
list.push(20);
list.prepend(5);

list.print();

console.log(list.tail); // ✅ correct tail