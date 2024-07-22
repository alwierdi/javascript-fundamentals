class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  displayProduct() {
    console.log(`Product : ${this.name}`);
    console.log(`Price : Rp.${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax)
  }
}

const salesTax = 0.05

const product1 = new Product("Apple", 10000);
const product2 = new Product("Orange", 20000);
const product3 = new Product("Banana", 100000);

product3.displayProduct()

const total = product3.calculateTotal(salesTax)
console.log(`Total price (with tax) : Rp.${total.toFixed(2)}`);