import Character from './Character';

class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const Snow = new Daemon('snow', 'Daemon');
console.log(Snow);
