import Character from './Character';

class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const Snow = new Undead('snow', 'Undead');
console.log(Snow);
