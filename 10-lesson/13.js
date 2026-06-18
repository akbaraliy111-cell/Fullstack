class Vehicle {
  constructor(brand, model) {
    this.brand = brand; 
    this.model = model;
  }
}

class Taxi extends Vehicle {
  constructor(brand, model, pricePerKm) {
    super(brand, model);        
    this.pricePerKm = pricePerKm; 
  }

  calculatePrice(distance) {
    let totalPrice = this.pricePerKm * distance; 
    return `${distance} km uchun narx: ${totalPrice} so'm`;
  }
}

const taxi = new Taxi("Chevrolet", "Cobalt", 3000);
console.log(taxi.calculatePrice(15)); 
