const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot
} = require('../calculator');

describe('Calculator - Basic Operations', () => {
  describe('addition', () => {
    test('adds 2 + 3 to equal 5', () => {
      expect(addition(2, 3)).toBe(5);
    });

    test('adds 10 + (-5) to equal 5', () => {
      expect(addition(10, -5)).toBe(5);
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => addition('a', 3)).toThrow(TypeError);
      expect(() => addition(2, NaN)).toThrow(TypeError);
    });
  });

  describe('subtraction', () => {
    test('subtracts 10 - 4 to equal 6', () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test('subtracts 5 - 10 to equal -5', () => {
      expect(subtraction(5, 10)).toBe(-5);
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => subtraction('a', 3)).toThrow(TypeError);
      expect(() => subtraction(2, NaN)).toThrow(TypeError);
    });
  });

  describe('multiplication', () => {
    test('multiplies 45 * 2 to equal 90', () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test('multiplies -3 * 4 to equal -12', () => {
      expect(multiplication(-3, 4)).toBe(-12);
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => multiplication('a', 3)).toThrow(TypeError);
      expect(() => multiplication(2, NaN)).toThrow(TypeError);
    });
  });

  describe('division', () => {
    test('divides 20 / 5 to equal 4', () => {
      expect(division(20, 5)).toBe(4);
    });

    test('divides 1 / 2 to equal 0.5', () => {
      expect(division(1, 2)).toBe(0.5);
    });

    test('throws RangeError when dividing by zero', () => {
      expect(() => division(10, 0)).toThrow(RangeError);
      expect(() => division(10, 0)).toThrow('Cannot divide by zero');
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => division('a', 3)).toThrow(TypeError);
      expect(() => division(2, NaN)).toThrow(TypeError);
    });
  });
});

describe('Calculator - Extended Operations', () => {
  describe('modulo', () => {
    test('calculates modulo with 5 % 2 to equal 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('calculates modulo with 10 % 3 to equal 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('calculates modulo with 8 % 4 to equal 0', () => {
      expect(modulo(8, 4)).toBe(0);
    });

    test('calculates modulo with negative dividend -7 % 3 to equal -1', () => {
      expect(modulo(-7, 3)).toBe(-1);
    });

    test('throws RangeError when divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow(RangeError);
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo with divisor zero');
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => modulo('a', 3)).toThrow(TypeError);
      expect(() => modulo(2, NaN)).toThrow(TypeError);
    });
  });

  describe('power', () => {
    test('calculates power with 2 ^ 3 to equal 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('calculates power with 5 ^ 2 to equal 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('calculates power with 2 ^ 0 to equal 1', () => {
      expect(power(2, 0)).toBe(1);
    });

    test('calculates power with 10 ^ -1 to equal 0.1', () => {
      expect(power(10, -1)).toBe(0.1);
    });

    test('calculates power with negative base -2 ^ 3 to equal -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => power('a', 3)).toThrow(TypeError);
      expect(() => power(2, NaN)).toThrow(TypeError);
    });
  });

  describe('square root', () => {
    test('calculates square root with √16 to equal 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('calculates square root with √9 to equal 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('calculates square root with √0 to equal 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('calculates square root with √2 to be approximately 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('throws RangeError for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow(RangeError);
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('throws TypeError for invalid inputs', () => {
      expect(() => squareRoot('a')).toThrow(TypeError);
      expect(() => squareRoot(NaN)).toThrow(TypeError);
    });
  });
});
