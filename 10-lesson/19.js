class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;  
  }

  getInfo() {
    return `Ismi: ${this.name}, Yoshi: ${this.age}`;
  }
}
class Doctor extends Person {
  constructor(name, age, specialization) {
    super(name, age);               
    this.specialization = specialization; 
  }

  getInfo() {
    return `${super.getInfo()}, Mutaxassilik: ${this.specialization}`; 
  }
}

class Patient extends Person {
  constructor(name, age, diagnosis) {
    super(name, age);      
    this.diagnosis = diagnosis; 
  }

  getInfo() {
    return `${super.getInfo()}, Tashxis: ${this.diagnosis}`;
  }
}

const doctor = new Doctor("Karimov Saidakbar", 45, "Kardiolog");
console.log(doctor.getInfo());