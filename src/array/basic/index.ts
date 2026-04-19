// const arr = [1, 2, 3, 4, 5]

// arr.push(10) // O(1)

// arr.pop() // O(1)

// arr.shift() // O(1)
// arr.unshift(10)
// arr.splice(2, 4)
// console.log(arr)


// static array

class MyArray<T> {
    public length: number;
    public data: { [key: number]: T };

    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get item
    get(index: number): T | undefined {
        return this.data[index];
    }

    // Add item (push)
    push(item: T): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Remove last item (pop)
    pop(): T | undefined {
        if (this.length === 0) return undefined;

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    // Delete item at index
    delete(index: number): T | undefined {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    // Shift items left after delete
    private shiftItems(index: number): void {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1] as T;
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}
const arr = new MyArray<string>();

arr.push("Apple");
arr.push("Banana");
arr.push("Mango");

console.log(arr.get(1)); // Banana

arr.delete(1);
console.log(arr.get(1)); // Mango

arr.pop();
console.log(arr.length); // 1