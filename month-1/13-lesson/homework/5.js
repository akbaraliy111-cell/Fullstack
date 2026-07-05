class BankAccount {
  #balance = 0;
  constructor(balance) {
    this.#balance = balance;
  };
  deposit(sum) {
    try {
      if (sum <= 0) throw new Error("Xoto");
      else  this.#balance += sum;
    } catch (err) {
      console.log(err.message);
    }
  };
  withdraw(sum) {
    try {
      if (sum > this.#balance)  throw new Error("Mablag' yetarli emas");
      else  this.#balance -= sum;
    } catch (err) {
      console.log(err.message);
    }
  };
  getBalance() {
    return this.#balance;
  };
}

const acc = new BankAccount(100);
acc.deposit(50); // balans: 150
acc.withdraw(200); // Error: Mablag‘ yetarli emas
