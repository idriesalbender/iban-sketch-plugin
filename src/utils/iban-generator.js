import DATA from './data.json';

const Chance = require('chance');
const chance = new Chance();

const CHAR_MAP = {
  a: {
    key: 'alpha',
    getString: length => chance.string({ length, pool: 'ABCDEFGHIJKLMNOPQRSTUVW' }),
  },
  c: {
    key: 'mixed',
    getString: length =>
      chance.string({
        length,
        pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      }),
  },
  n: {
    key: 'digit',
    getString: length => chance.string({ length, pool: '0123456789' }),
  },
};

const COUNTRY_RANGES = {
  EU: 'EU',
  EAC: 'EAC',
  EUROZONE: 'EUROZONE',
  WORLD: 'WORLD',
};

/**
 * Generates an IBAN number for a specified country
 * @param {string} countryName - name of country to generate IBAN for
 * @returns {string}
 */
const generateIBANFromCountry = countryName => {
  const result = DATA.find(item => item.country.name === countryName);
  const { bbanFormat, country } = result;

  const ibanPrefix = `${country.code}${chance.string({ length: 2, pool: '0123456789' })}`;
  const bbanSuffix = bbanFormat.order
    .map(unit => CHAR_MAP[unit].getString(bbanFormat[CHAR_MAP[unit].key]))
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
  // TODO: implement trade association pools
  // else if (options.range) {
  //   pool = DATA.filter(c => c.country.range.find(options.range)).map(c => c.country.name);
  // }

  if (pool) {
    result = pool[chance.integer({ min: 0, max: pool.length })];
    return generateIBANFromCountry(result);
  }

  result = options.country;
  return generateIBANFromCountry(result);
};
