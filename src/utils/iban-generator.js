import DATA from './data.json';
const Chance = require('chance');
const chance = new Chance();

const POOLS = {
  ALPHA: 'ABCDEFGHIJKLMNOPQRSTUVW',
  DIGIT: '0123456789',
  MIXED: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
};

/**
 * Test if string is alpha character
 * @param {string} str - string to test
 * @returns {mixed}
 */
export const isAlpha = str => {
  const match = str.match(/(\d+)(?=a)/);
  if (match) return parseInt(match[0]);
  return false;
};

/**
 * Test if string is digit character
 * @param {string} str - string to test
 * @returns {mixed}
 */
export const isDigit = str => {
  const match = str.match(/(\d+)(?=n)/);
  if (match) return parseInt(match[0]);
  return false;
};

/**
 * Test if string is mixed character
 * @param {string} str - string to test
 * @returns {mixed}
 */
export const isMixed = str => {
  const match = str.match(/(\d+)(?=c)/);
  if (match) return parseInt(match[0]);
  return false;
};

/**
 * Generates a random string at specific length from specific pool
 * @param {int} length - length of string to generate
 * @param {string} pool - pool of chars to choose from
 */
const makeString = (length, pool) => chance.string({ length, pool });

/**
 * Generates an IBAN number for a specified country
 * @param {string} countryName - name of country to generate IBAN for
 * @returns {string}
 */
export const generateIBANFromCountry = countryName => {
  if (!countryName) {
    throw new Error('No country string provided!');
  }

  const result = DATA.find(item => item.country.name === countryName);

  if (!result) {
    throw new Error('Country not found for given string!');
  }

  const { bbanFormat, country } = result;

  const ibanPrefix = `${country.code}${chance.string({ length: 2, pool: '0123456789' })}`;
  const bbanSuffix = bbanFormat
    .split(',')
    .map(unit => {
      if (isAlpha(unit)) return makeString(isAlpha(unit), POOLS.ALPHA);
      if (isDigit(unit)) return makeString(isDigit(unit), POOLS.DIGIT);
      if (isMixed(unit)) return makeString(isMixed(unit), POOLS.MIXED);
    })
    .join('');

  return `${ibanPrefix}${bbanSuffix}`.match(/.{1,4}/g).join(' ');
};

/**
 * Generates an IBAN number
 * @param {string} [options] - options
 * @param {string} [options.range] - specify a country range (eg: EU, EEA...)
 * @param {string} [options.country] - specify a specific country range (eg: Belgium)
 *
 * @returns {string}
 */
export const generateIBAN = options => {
  let pool = null;
  let result = null;

  if (!options) {
    pool = DATA.map(c => c.country.name);
  }

  if (pool) {
    result = pool[chance.integer({ min: 0, max: pool.length })];
    return generateIBANFromCountry(result);
  }

  result = options.country;
  return generateIBANFromCountry(result);
};
