class Product {
  constructor(name, price) {
    this.name = name;  
    this.price = price; 
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, warranty) {
    super(name, price);    
    this.warranty = warranty; 
  }

  getDiscountedPrice(discount) {
    let discounted = this.price - (this.price * discount / 100); // Chegirma hisobi
    return `${this.name} chegirmali narxi: ${discounted} so'm`;
  }
}

const laptop = new ElectronicProduct("Noutbuk", 5000000, 2);
console.log(laptop.getDiscountedPrice(10)); // 10% chegirma
