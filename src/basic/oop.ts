// class BankAccount {
//     private balance: number = 0
//     deposit(amount: number) {
//         if (typeof amount !== "number" || amount < 0) {
//             throw new Error("amount is not valid!")
//         }
//         this.balance += amount
        
//     }
//     withdraw(amount: number) {
//         if (typeof amount !== "number" || amount < 0) {
//             throw new Error("amount is not valid!")
//         }
//         this.balance -= amount
//     }
//     myBalance() {
//         console.log(this.balance);
//     }
//     get my_balance(): number {
//         return this.balance
//     }
//     set setBalance(amount: number) {
//         if (typeof amount !== 'number' || amount < 0) {
//             console.log("amount is not valid!");
//             return
//         }
//         this.balance += amount
//     }
// }
// const account = new BankAccount()
// account.deposit(100000)
// account.withdraw(100)
// account.setBalance = 100
// account.myBalance()

// class Animal {
//   constructor(public name: string) {}
//   move() {
//     console.log(`${this.name} is moving`);
//   }
// }

// class Dog extends Animal {
//     constructor(public name: string) {
//         super(name)
//     }
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// const dog = new Dog("Rex");
// console.log(dog.name);
// dog.move(); // Rex is moving
// dog.bark(); // Rex is barking


// class Shape {
//   area(): number {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(private width: number, private height: number) {
//     super();
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//   area(): number {
//     return Math.PI * this.radius ** 2;
//     }
//     static PI: number = 3.14
// }

// const shapes: Shape[] = [new Rectangle(10, 20), new Circle(5)];
// shapes.forEach((shape) => console.log(shape.area()));

// console.log(Circle.PI)

// Type of config is:
// {
//   host: string;
//   port: number;
//   debug: boolean;
// }
