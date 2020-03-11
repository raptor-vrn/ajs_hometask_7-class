import Character from './Character';

class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const Snow = new Bowerman('snow', 'Bowerman');
console.log(Snow);
