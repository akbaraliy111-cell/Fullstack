class Device {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model; 
  }
}

class Laptop extends Device {
  constructor(brand, model, ram) {
    super(brand, model);
    this.ram = ram;    
  }

  getPerformance() {
    if (this.ram >= 16) {         
      return "High Performance";
    }
    return "Standard Performance";
  }
}

const laptop1 = new Laptop("Dell", "XPS 15", 32);
console.log(`${laptop1.brand} ${laptop1.model}: ${laptop1.getPerformance()}`); // High Performance