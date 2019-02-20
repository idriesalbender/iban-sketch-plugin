import { generateIBAN, generateIBANFromCountry } from '../utils/iban-generator';
import DATA from '../utils/data.json';

const makeExpectedIsoRegex = iso =>
  expect.stringMatching(new RegExp(`^${iso}(?=[a-z\\\d ]+)`, 'i'));

const countries = DATA.map(c => c);

describe('[function] generateIBANFromCountry', () => {
  describe('IBAN generating', () => {
    for (let i = 0; i < countries.length; i += 1) {
      const country = countries[i];
      it(`generates a valid IBAN from given country: ${countries[i].country.name}`, () => {
        const {
          country: { code, name },
          chars,
        } = country;
        const iban = generateIBANFromCountry(name);
        expect(iban).toEqual(makeExpectedIsoRegex(code));
        expect(iban.replace(/[^a-z\d]+/gi, '').length).toEqual(chars);
      });
    }
  });

  describe('error handling', () => {
    it('throws error when faulty country string is provided', () => {
      expect(() => generateIBANFromCountry('idix')).toThrow();
    });

    it('throws error when no country string is provided', () => {
      expect(() => generateIBANFromCountry()).toThrow();
    });
  });
});

describe('[function] generateIBAN', () => {
  describe('IBAN generating', () => {
    let expected = makeExpectedIsoRegex('[A-Z]{2}');
    it('generates a valid, random IBAN without params', () => {
      expect(generateIBAN()).toEqual(expected);
    });

    for (let i = 0; i < countries.length; i += 1) {
      it(`generates a valid IBAN from given country, passed through options: ${
        countries[i].country.name
      }`, () => {
        const country = countries[i];
        const {
          country: { code, name },
          chars,
        } = country;
        const iban = generateIBAN({ country: name });
        expect(iban).toEqual(makeExpectedIsoRegex(code));
        expect(iban.replace(/[^a-z\d]+/gi, '').length).toEqual(chars);
      });
    }
  });

  describe('error handling', () => {
    it('throws error when !object is provided', () => {
      expect(() => generateIBAN('idix')).toThrow();
    });
  });
});
