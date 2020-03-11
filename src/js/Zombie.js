import Character from './Character';

class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const Snow = new Zombie('snow', 'Zombie');
console.log(Snow);
