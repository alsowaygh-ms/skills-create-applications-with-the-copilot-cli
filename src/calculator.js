/**
 * Calculator module providing basic arithmetic operations
 * Supported operations: addition, subtraction, multiplication, division, modulo, exponentiation (power), square root
 */

/**
 * Validates that a value is a valid number
 * @param {*} value - The value to validate
 * @param {string} name - The name of the parameter for error messages
 * @throws {TypeError} If the value is not a valid number
 */
function assertNumber(value, name) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`);
  }
}

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function addition(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a + b;
}

/**
 * Subtracts second number from first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtraction(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiplication(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a * b;
}

/**
 * Divides first number by second
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a divided by b
 * @throws {RangeError} If divisor is zero
 */
function division(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculates the modulo (remainder) of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {RangeError} If divisor is zero
 */
function modulo(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) {
    throw new RangeError('Cannot calculate modulo with divisor zero');
  }
  return a % b;
}

/**
 * Raises base to the power of exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the power of exponent
 */
function power(base, exponent) {
  assertNumber(base, 'base');
  assertNumber(exponent, 'exponent');
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} Square root of n
 * @throws {RangeError} If n is negative
 */
function squareRoot(n) {
  assertNumber(n, 'n');
  if (n < 0) {
    throw new RangeError('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot
};
