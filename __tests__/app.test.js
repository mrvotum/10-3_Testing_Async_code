import  from '../src/js/';

test('Magician, Stoned off', () => {
  const inputCharacter = new Magician('Rick');

  const expected = 60; // ожидает 'атаку' = 60

  inputCharacter.attackTo = 5;

  const received = inputCharacter._attack; // получает
  expect(received).toEqual(expected); // сравнивает
});


test('Magician, Stoned off, distance > 10 = error', () => {
  const inputCharacter = new Magician('Rick');

  const received = () => inputCharacter.attackTo = 14; // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});
