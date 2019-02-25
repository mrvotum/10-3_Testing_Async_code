import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';

jest.setTimeout(10000);

jest.mock('../src/js/readGameSaving');

test('Mocking of readGameSaving = error', () => {
  readGameSaving.mockRejectedValue('ERROR');

  return expect(GameSavingLoader.load()).rejects.toThrow('LOAD_ERROR');
});
