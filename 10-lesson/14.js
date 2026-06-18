class Product {
  constructor(name, price) {
    this.name = name;   
    this.price = price; 
  }
}
class Food extends Product {
  constructor(name, price, expirationDays) {
    super(name, price);             
    this.expirationDays = expirationDays; 
  }

  checkExpiration(daysStored) {
    if (daysStored > this.expirationDays) { 
      return `${this.name} yaroqsiz!`;
    }
    let daysLeft = this.expirationDays - daysStored; 
    return `${this.name} yaroqli, ${daysLeft} kun qoldi`;
  }
}

const food1 = new Food("Non", 5000, 3);
console.log(food1.checkExpiration(4)); 
