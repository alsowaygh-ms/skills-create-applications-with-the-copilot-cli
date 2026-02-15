const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
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

  // Extended operations examples (from calc-extended-operations.png)
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('sqrt(9) = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });
});

describe('calculator edge cases and input validation', () => {
  test('division by zero throws', () => {
    expect(() => division(1, 0)).toThrow('Cannot divide by zero');
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow('Cannot modulo by zero');
  });

  test('squareRoot rejects negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('power works with exponent 0', () => {
    expect(power(7, 0)).toBe(1);
  });

  test('modulo works with negatives', () => {
    expect(modulo(-5, 2)).toBe(-1);
  });

  test('squareRoot of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
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
