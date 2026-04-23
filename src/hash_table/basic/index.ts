const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'    
    },
    print(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`);
    }
}

user.age = 31; // Update age
user.address.city = 'Othertown'; // Update city
// user.print(); // Print user information



const m = new Map()
m.set("a", 333)
m.set("a", 3333)
