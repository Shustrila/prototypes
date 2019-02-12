function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = (points = 0, character = {}) => {
  if (Object.keys(character).length === 0) throw Error("Cannot read property 'defence' of undefined");

  const calc = points * (1 - character.defence / 100);

  if (character.health > calc) character.health -= calc; else character.health = 0;
};

export default Character;
