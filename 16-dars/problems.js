const students = [
    { id: 1, name: "Ali", grade: 80 },
    { id: 2, name: "Olim", grade: 40 },
    { id: 3, name: "Vali", grade: 60 },
    ];
    
function getAverageGrade(students){
    let sum = 0;
    for (let i of students) sum += i.grade
    return (sum / students.length).toFixed(2);
};

console.log(getAverageGrade(students));

// ########################################

const words = ['banana', 'hello', 'earth', 'python'];

const result = words.reduce((a,b) => a.length >= b.length ? a : b);

console.log(result);

// ########################################

class BankAccount {
    #balance = 0;
    constructor(balance){
        this.#balance = balance;
    };
    
    payment(value){
        if (value > this.#balance){
            return false
        };
        this.#balance -= value; 
        return true
    };
    
    income(value){
        this.#balance += value
    };
    
    get getBalance(){
        return this.#balance
    };
};

const user1 = new BankAccount(50000);
const user2 = new BankAccount(10000);

if (user1.payment(40000)){
    user2.income(40000);
    console.log("Muvaffaqiyatli!");
} else {
    console.log("Balans yetarli emas!");
};

console.log("User 1:", user1.getBalance);
console.log("User 2:", user2.getBalance);