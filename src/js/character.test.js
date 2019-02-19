import Character from './character.js';

const character = new Character('Shustrila', 'Tank');

describe('TEST: character', () => {
  test('normal damage', () => {
    const expected = 82;

    character.damage(30);

    expect(character.health).toBe(expected);
  });

  test('big damage', () => {
    const expected = 0;

    character.damage(3000);

    expect(character.health).toBe(expected);
  });

  test('one param equal undefined', () => {
    const characterDamage = () => character.damage();
    expect(characterDamage).toThrow();
  });
});
