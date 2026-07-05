class Account {
  constructor(owner, balance) {
    this.owner = owner;    
    this.balance = balance;
  }
}

class SavingsAccount extends Account {
  constructor(owner, balance, interestRate) {
    super(owner, balance);        
    this.interestRate = interestRate; 
  }

  getBalanceWithInterest() {
    let newBalance = this.balance + (this.balance * this.interestRate / 100);
    return `${this.owner} ning yangi balansi: ${newBalance} so'm`;
  }
}

const account = new SavingsAccount("Akbar", 1000000, 15);
console.log(account.getBalanceWithInterest());
