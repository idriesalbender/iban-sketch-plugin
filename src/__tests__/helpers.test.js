import { isAlpha, isDigit, isMixed } from '../utils/iban-generator';

describe('[utils] helpers', () => {
  describe('[function] isAlpha', () => {
    it('returns correct count of alpha-encoded chars', () => {
      expect(isAlpha('5a')).toEqual(5);
      expect(isAlpha('5a')).toBeTruthy();
    });

    it('returns false if there are no alpha-encoded chars', () => {
      expect(isAlpha('5n')).toEqual(false);
      expect(isAlpha('5n')).toBeFalsy();
    });
  });

  describe('[function] isDigit', () => {
    it('returns correct count of digit-encoded chars', () => {
      expect(isDigit('5n')).toEqual(5);
      expect(isDigit('5n')).toBeTruthy();
    });

    it('returns false if there are no digit-encoded chars', () => {
      expect(isDigit('5a')).toEqual(false);
      expect(isDigit('5a')).toBeFalsy();
    });
  });

  describe('[function] isMixed', () => {
    it('returns correct count of mixed-encoded chars', () => {
      expect(isMixed('5c')).toEqual(5);
      expect(isMixed('5c')).toBeTruthy();
    });

    it('returns false if there are no mixed-encoded chars', () => {
      expect(isMixed('5a')).toEqual(false);
      expect(isMixed('5a')).toBeFalsy();
    });
  });
});
