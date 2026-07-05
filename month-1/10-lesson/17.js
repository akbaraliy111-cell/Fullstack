class Employee {
  constructor(name, baseSalary) {
    this.name = name;         
    this.baseSalary = baseSalary;
  }

  calculateSalary() {
    return this.baseSalary; }
}

class Developer extends Employee {
  constructor(name, baseSalary, techStack) {
    super(name, baseSalary);  
    this.techStack = techStack; 
  }

  calculateSalary() {
    let salary = super.calculateSalary() * 1.2; 
    return `${this.name} (Developer) maoshi: ${salary} so'm`;
  }
}

class Designer extends Employee {
  constructor(name, baseSalary, tools) {
    super(name, baseSalary);
    this.tools = tools;   
  }

  calculateSalary() {
    let salary = super.calculateSalary() * 1.1; 
    return `${this.name} (Designer) maoshi: ${salary} so'm`;
  }
}
class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary); 
    this.bonus = bonus;     
  }

  calculateSalary() {
    let salary = super.calculateSalary() + this.bonus;
    return `${this.name} (Manager) maoshi: ${salary} so'm (bonus: ${this.bonus})`;
  }
}

const dev = new Developer("Akbar", 5000000, "JavaScript");
console.log(dev.calculateSalary());