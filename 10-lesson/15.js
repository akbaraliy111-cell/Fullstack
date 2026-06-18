class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }

  getInfo() {
    return `Ismi: ${this.name}, Yoshi: ${this.age}`;
  }
}
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);        
    this.studentId = studentId; 
  }

}
class GraduateStudent extends Student {
  constructor(name, age, studentId, thesis) {
    super(name, age, studentId); 
    this.thesis = thesis;        
  }

  getInfo() {
    return `${super.getInfo()}, Dissertatsiya: ${this.thesis}`;
  }
}

const grad = new GraduateStudent("Akbar", 24, "S-1023", "AI in Uzbekistan");
console.log(grad.getInfo());
