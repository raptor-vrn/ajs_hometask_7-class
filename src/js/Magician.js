import Character from './Character';

class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const Snow = new Magician('snow', 'Magician');
console.log(Snow);
