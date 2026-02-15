/**
 * Basic calculator operations supported:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
 */

function assertNumber(value, name) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`);
  }
}

function addition(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a + b;
}

function subtraction(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a - b;
}

function multiplication(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a * b;
}

function division(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) throw new RangeError('Cannot divide by zero');
  return a / b;
}

function modulo(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) throw new RangeError('Cannot modulo by zero');
  return a % b;
}

function power(base, exponent) {
  assertNumber(base, 'base');
  assertNumber(exponent, 'exponent');
  return base ** exponent;
}

function squareRoot(n) {
  assertNumber(n, 'n');
  if (n < 0) throw new RangeError('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
