import Character from './character.js';

const character = new Character('Shustrila', 'Tank');

describe('TEST: character', () => {
  test('normal damage', () => {
    const expected = 82;

    character.damage.call(this, 30, character);

    expect(character.health).toBe(expected);
  });

  test('big damage', () => {
    const expected = 0;

    character.damage.call(this, 3000, character);

    expect(character.health).toBe(expected);
  });

  test('big damage', () => {
    const characterDamage = () => character.damage.call(this);
    expect(characterDamage).toThrow();
  });

  test('forgot to specify user', () => {
    const characterDamage = () => character.damage.call(this, 3000);
    expect(characterDamage).toThrow();
  });
});
