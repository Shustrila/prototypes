import Character from './character.js';

const character = new Character('Shustrila', 'Танк');

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

  test('forgot to specify user', () => {
    character.damage.call(this, 3000);
    expect(character.damage).toThrow(Error);
  });
});
