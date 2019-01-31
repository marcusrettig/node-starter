import { getMessage } from './message';

describe('getMessage()', () => {
  test('Message is Hello World', () => {
    expect(getMessage()).toEqual('Hello World!');
  });
});
