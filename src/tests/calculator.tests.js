const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('../calculator');

describe('calculator basic operations (from calc-basic-operations.png examples)', () => {
  test('2 + 3 = 5', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(multiplication(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(division(20, 5)).toBe(4);
  });
});

describe('calculator edge cases and input validation', () => {
  test('division by zero throws', () => {
    expect(() => division(1, 0)).toThrow('Cannot divide by zero');
  });

  test('addition rejects non-numbers', () => {
    expect(() => addition('2', 3)).toThrow(TypeError);
  });

  test('subtraction rejects NaN', () => {
    expect(() => subtraction(NaN, 1)).toThrow(TypeError);
  });

  test('multiplication handles negatives', () => {
    expect(multiplication(-3, 2)).toBe(-6);
  });

  test('division returns floating results', () => {
    expect(division(1, 2)).toBe(0.5);
  });
});
