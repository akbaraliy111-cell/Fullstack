class Character {
  constructor(name, health) {
    this.name = name;     
    this.health = health;
  }
}

class Mage extends Character {
  constructor(name, health, mana, spellPower) {
    super(name, health);       
    this.mana = mana;         
    this.spellPower = spellPower; 
  }

  calculateSpellDamage() {
    let damage = this.mana * this.spellPower / 100;
    return `${this.name} sehr bilan ${damage} zarar berdi!`;
  }
}

const mage = new Mage("Merlin", 80, 200, 50);
console.log(mage.calculateSpellDamage());
