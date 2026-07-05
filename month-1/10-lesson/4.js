class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }
}

class Teacher extends Person {
  constructor(name, age, subject, experience) {
    super(name, age);          
    this.subject = subject;    
    this.experience = experience; 
  }

  getLevel() {
    if (this.experience > 5) { 
      return "Senior Teacher";
    }
    return "Junior Teacher";
  }
}

const teacher1 = new Teacher("Sardor", 35, "Matematika", 8);
console.log(`${teacher1.name}: ${teacher1.getLevel()}`); 