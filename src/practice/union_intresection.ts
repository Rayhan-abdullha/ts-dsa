// assignment
/*
    Create a base Product
    Extend it into:
    DigitalProduct
    PhysicalProduct
    Then combine them using Union
*/
type Product = {
  id: string;
  title: string;
  price: number;
};
type DigitalProduct = Product & {
    type: "digital";
    downloadLink: string
}
type PhysicalProduct = Product & {
    type: "physical";
    shippingAddress: string
}
type AllProducts = DigitalProduct | PhysicalProduct
const book: DigitalProduct = {
  id: "1",
  title: "Learn TypeScript",
  price: 10,
  type: "digital",
  downloadLink: "https://example.com/book",
};

const shirt: PhysicalProduct = {
  id: "2",
  title: "T-Shirt",
  price: 20,
  type: "physical",
  shippingAddress: "Dhaka",
};

function printProduct(product: AllProducts): void {
  if (product.type === "digital") {
    console.log("Download link:", product.downloadLink);
  } else {
    console.log("Shipping address:", product.shippingAddress);
  }
}
printProduct(book)
printProduct(shirt)