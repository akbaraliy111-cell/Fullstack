class Payment {
  constructor(amount) {
    this.amount = amount; 
  }

  getInfo() {
    return `To'lov miqdori: ${this.amount} so'm`;
  }
}
class CardPayment extends Payment {
  constructor(amount, cardNumber) {
    super(amount);            
    this.cardNumber = cardNumber;
  }

  getInfo() {
    return `${super.getInfo()}, Karta: ${this.cardNumber}`;
  }
}
class UzCardPayment extends CardPayment {
  constructor(amount, cardNumber, bank) {
    super(amount, cardNumber);
    this.bank = bank;       
  }

  getInfo() {
    return `${super.getInfo()}, Bank: ${this.bank}`;
  }
}

const payment = new UzCardPayment(150000, "8600 1234 5678 9012", "Xalq banki");
console.log(payment.getInfo());
