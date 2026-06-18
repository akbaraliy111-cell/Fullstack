class User {
  constructor(name, email) {
    this.name = name;   
    this.email = email; 
  }
}
class Customer extends User {
  constructor(name, email, ordersCount) {
    super(name, email);         
    this.ordersCount = ordersCount; 
  }

  getStatus() {
    if (this.ordersCount > 20) {
      return "VIP Customer";
    }
    return "Regular Customer";
  }
}

const customer1 = new Customer("Akbar", "akbar@gmail.com", 25);
console.log(`${customer1.name}: ${customer1.getStatus()}`); 