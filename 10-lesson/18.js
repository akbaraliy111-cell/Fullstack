class Vehicle {
  constructor(brand, fuelTankSize) {
    this.brand = brand;          
    this.fuelTankSize = fuelTankSize; 
  }

  calculateFuel(distance) {
    return distance; 
  }
}
class Car extends Vehicle {
  constructor(brand, fuelTankSize) {
    super(brand, fuelTankSize); 
  }

  calculateFuel(distance) {
    let fuel = distance * 0.08;
    return `${this.brand} (Avtomobil) ${distance} km uchun: ${fuel} litr`;
  }
}

class Bus extends Vehicle {
  constructor(brand, fuelTankSize) {
    super(brand, fuelTankSize); }

  calculateFuel(distance) {
    let fuel = distance * 0.25; 
    return `${this.brand} (Avtobus) ${distance} km uchun: ${fuel} litr`;
  }
}
class Truck extends Vehicle {
  constructor(brand, fuelTankSize) {
    super(brand, fuelTankSize);
  }

  calculateFuel(distance) {
    let fuel = distance * 0.35; 
    return `${this.brand} (Yuk mashinasi) ${distance} km uchun: ${fuel} litr`;
  }
}

const car = new Car("Chevrolet", 50);
console.log(car.calculateFuel(100));