import Character from './Character';

class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const Snow = new Swordsman('snow', 'Swordsman');
console.log(Snow);
