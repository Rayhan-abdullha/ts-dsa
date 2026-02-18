// =========================
// OOP MINI PROJECT (TS)
// E-Commerce System
// =========================

// ---------- Product Class ----------
class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

// ---------- User Class ----------
class User {
  constructor(
    public id: number,
    public name: string,
    private password: string
  ) {}

  login(pass: string): boolean {
    return this.password === pass;
  }
}

// ---------- CartItem Type ----------
type CartItem = {
  product: Product;
  quantity: number;
};

// ---------- Cart Class (Encapsulation) ----------
class Cart {
  private items: CartItem[] = [];

  addProduct(product: Product, quantity: number = 1) {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeProduct(productId: number) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
}

// ---------- Discount Interface ----------
interface DiscountStrategy {
  apply(total: number): number;
}

// ---------- Percentage Discount ----------
class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}

  apply(total: number): number {
    return total - total * (this.percent / 100);
  }
}

// ---------- Fixed Discount ----------
class FixedDiscount implements DiscountStrategy {
  constructor(private amount: number) {}

  apply(total: number): number {
    if (total < this.amount) return 0;
    return total - this.amount;
  }
}

// ---------- Abstract Payment Class ----------
abstract class Payment {
  abstract pay(amount: number): void;
}

// ---------- Card Payment (Inheritance + Polymorphism) ----------
class CardPayment extends Payment {
  pay(amount: number): void {
    console.log(`💳 Paid ${amount} BDT using Card Payment`);
  }
}

// ---------- Cash Payment ----------
class CashPayment extends Payment {
  pay(amount: number): void {
    console.log(`💵 Paid ${amount} BDT using Cash Payment`);
  }
}

// ---------- Order Class ----------
class Order {
  static orderCount: number = 0;

  public orderId: number;
  public totalAmount: number;

  constructor(
    private user: User,
    private cart: Cart,
    private paymentMethod: Payment,
    private discount?: DiscountStrategy
  ) {
    Order.orderCount++;
    this.orderId = Order.orderCount;

    let total = cart.getTotal();

    if (discount) {
      total = discount.apply(total);
    }

    this.totalAmount = total;
  }

  placeOrder() {
    console.log("\n===============================");
    console.log(`🛒 Order Placed Successfully!`);
    console.log(`👤 Customer: ${this.user.name}`);
    console.log(`🆔 Order ID: ${this.orderId}`);

    console.log("\n📦 Items:");
    this.cart.getItems().forEach((item) => {
      console.log(
        `- ${item.product.name} x${item.quantity} = ${
          item.product.price * item.quantity
        } BDT`
      );
    });

    console.log("\n💰 Total:", this.cart.getTotal(), "BDT");
    console.log("🎯 Final Total After Discount:", this.totalAmount, "BDT");

    console.log("\n💳 Payment Processing...");
    this.paymentMethod.pay(this.totalAmount);

    console.log("===============================\n");
  }
}

// Main Execution
// Create Products
const laptop = new Product(1, "Laptop", 50000);
const mouse = new Product(2, "Mouse", 1000);
const keyboard = new Product(3, "Keyboard", 2500);

// Create User
const user = new User(1, "Rayhan", "1234");

// Login check
if (user.login("12d34")) {
    console.log("Login: ✅ Success");
    // Create Cart
    const cart = new Cart();
    cart.addProduct(laptop, 1);
    cart.addProduct(mouse, 2);
    cart.addProduct(keyboard, 1);

    // Discount Strategy
    const discount = new PercentageDiscount(10); // 10% discount
    // const discount = new FixedDiscount(2000); // fixed discount

    // Payment Method
    const payment = new CardPayment(); // polymorphism
    // const payment = new CashPayment();

    // Create Order
    const order = new Order(user, cart, payment, discount);
    order.placeOrder();

} else {
    console.log("Login: ❌ Failed");
}
