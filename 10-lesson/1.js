class Animal {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);  
    this.breed = breed; 
  }

  getInfo() {
    return `Ismi: ${this.name}, Yoshi: ${this.age}, Zoti: ${this.breed}`;
  }
}

const dog1 = new Dog("Rex", 3, "Apcharka");
console.log(dog1.getInfo());