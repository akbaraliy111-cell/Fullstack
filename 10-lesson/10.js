class Account {
  constructor(owner, balance) {
    this.owner = owner;     
    this.balance = balance;}

  getInfo() {
    return `Egasi: ${this.owner}, Balans: ${this.balance} so'm`;
  }
}

class DepositAccount extends Account {
  constructor(owner, balance, depositTerm) {
    super(owner, balance);    
    this.depositTerm = depositTerm; 
  }

  getInfo() {
    return `${super.getInfo()}, Muddat: ${this.depositTerm} oy`;
  }
}
class PremiumDepositAccount extends DepositAccount {
  constructor(owner, balance, depositTerm, bonusRate) {
    super(owner, balance, depositTerm); 
    this.bonusRate = bonusRate;        
  }

  getInfo() {
    let bonusAmount = this.balance * this.bonusRate / 100; 
    return `${super.getInfo()}, Bonus: ${bonusAmount} so'm (+${this.bonusRate}%)`;
  }
}

const account = new PremiumDepositAccount("Akbar", 10000000, 12, 5);
console.log(account.getInfo());
