// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  // use a number from 1000 to 9999 (both inclusive)
  const num = 1000 + Math.floor(Math.random() * (9999 - 1000));
  return `NCC-${num}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  // returns a floating point number between 41000.0 (inclusive) and 42000.0 (exclusive)
  return 41000 + 1000 * Math.random()
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const array = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const num = Math.floor(Math.random() * 10);
  return array[num]
}
