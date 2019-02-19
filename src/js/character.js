function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  if (points === undefined) throw new Error('one param equal undefined');

  const calc = points * (1 - this.defence / 100);

  this.health > calc ? this.health -= calc : this.health = 0;
};

export default Character;
