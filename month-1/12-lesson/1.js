class BankAccount {
    #balance = 0;
    static bankName = 'UzBank';
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    
    set deposit(amount){
        this.#balance += amount;
    };
    
    set withdraw(amount){
        if (this.#balance > amount){
            const temp = this.#balance -= amount;
            console.log(`your ${temp} money`);
        } else console.log(`not enough`);
    }
    
    get getBalance(){
        return this.#balance
    }
}

const user = new BankAccount();

user.deposit = 1000;
console.log(user.getBalance);

user.withdraw = 1200;
user.withdraw = 400;

console.log(user.getBalance);