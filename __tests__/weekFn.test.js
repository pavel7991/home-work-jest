import { weekFn } from '../main.js';

test('Test weekFn func', () => {
  expect(weekFn(1)).toBe('Понеділок');
  expect(weekFn(2)).toBe('Вівторок');
  expect(weekFn(3)).toBe('Середа');
  expect(weekFn(4)).toBe('Четвер');
  expect(weekFn(5)).toBe('П\'ятниця');
  expect(weekFn(6)).toBe('Субота');
  expect(weekFn(7)).toBe('Неділя');
  expect(weekFn(0)).toBe(null);
  expect(weekFn('2')).toBe(null);
  expect(weekFn(8)).toBe(null);
});


