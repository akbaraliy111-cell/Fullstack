class Student {
    static maxGrade = 100;
    #grades = [];
    cosntructor(name){
        this.name = name;
        this.#grades;
    }
    
    set addGrade(score){
        if (0 <= score <= Student.maxGrade())
        this.#grades.push(score);
    }
    
    get getAverage(){
        return (this.#grades.reduce((a,b) => a += b) / this.#grades.length).toFixed(2);
    }
    
}

const user = new Student("Ali", 20);

user.addGrade = 100;
user.addGrade = 90;
user.addGrade = 80;

console.log(user.getAverage)