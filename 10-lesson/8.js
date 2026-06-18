class Course {
  constructor(title, price) {
    this.title = title;
    this.price = price; 
  }
}
class ProgrammingCourse extends Course {
  constructor(title, price, language, studentsCount) {
    super(title, price);             
    this.language = language;      
    this.studentsCount = studentsCount;
  }

  getPopularity() {
    if (this.studentsCount >= 1000) {     
      return "Juda mashhur";
    } else if (this.studentsCount >= 500) { 
      return "Mashhur";
    }
    return "Kam mashhur";
  }
}

const course1 = new ProgrammingCourse("JavaScript kursi", 500000, "JavaScript", 1500);
console.log(`${course1.title}: ${course1.getPopularity()}`); 