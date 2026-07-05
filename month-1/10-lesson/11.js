class Character {
  constructor(name, health) {
    this.name = name;    
    this.health = health;
  }
}
class Warrior extends Character {
  constructor(name, health, attackPower) {
    super(name, health);    
    this.attackPower = attackPower; 
  }

  calculateDamage(multiplier) {
    let damage = this.attackPower * multiplier; 
    return `${this.name} ${damage} zarar berdi!`;
  }
}

const warrior = new Warrior("Temur", 100, 25);
console.log(warrior.calculateDamage(2)); 
