/**
 * Basic calculator operations supported:
 * - addition
 * - subtraction
 * - multiplication
 * - division
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

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
