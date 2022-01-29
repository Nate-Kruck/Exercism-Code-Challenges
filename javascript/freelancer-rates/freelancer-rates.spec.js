// @ts-check

import {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount,
} from './freelancer-rates';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

// @ts-ignore
describe('freelancer rates', () => {
  // @ts-ignore
  describe('day rate', () => {
    // @ts-ignore
    test('at 16/hour', () => {
      const actual = dayRate(16);
      // @ts-ignore
      expect(actual).toBe(128);
    });

    // @ts-ignore
    test('at 25/hour', () => {
      const actual = dayRate(25);
      // @ts-ignore
      expect(actual).toBe(200);
    });

    // @ts-ignore
    test('at 31.40/hour', () => {
      const actual = dayRate(31.4);
      // @ts-ignore
      expect(actual).toBeCloseTo(251.2, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    // @ts-ignore
    test('at 89.89/hour', () => {
      const actual = dayRate(89.89);
      // @ts-ignore
      expect(actual).toBeCloseTo(719.12, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    // @ts-ignore
    test('at 97.654321/hour', () => {
      const actual = dayRate(97.654321);
      // @ts-ignore
      expect(actual).toBeCloseTo(781.234568, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });

  // @ts-ignore
  describe('days in budget', () => {
    // @ts-ignore
    describe('with a budget of 1280', () => {
      // @ts-ignore
      test('at 16/hour', () => {
        const actual = daysInBudget(1280, 16);
        const expected = 10;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('at 25/hour', () => {
        const actual = daysInBudget(1280, 25);
        const expected = 6;

        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      describe('with a budget of 835', () => {
        // @ts-ignore
        test('at 12/hour', () => {
          const actual = daysInBudget(835, 12);
          const expected = 8;

          // @ts-ignore
          expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
        });
      });
    });
  });

  // @ts-ignore
  describe('cost with monthly discount', () => {
    // @ts-ignore
    describe('at 16/hour', () => {
      // @ts-ignore
      test('for 70 days', () => {
        const actual = priceWithMonthlyDiscount(16, 70, 0);
        const expected = 8960;
        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('for 130 days with 15% discount', () => {
        const actual = priceWithMonthlyDiscount(16, 130, 0.15);
        const expected = 14528;
        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });
    // @ts-ignore
    describe('at 29.654321/hour', () => {
      // @ts-ignore
      test('for 220 days with 11.2%', () => {
        const actual = priceWithMonthlyDiscount(29.654321, 220, 0.112);
        const expected = 46347;
        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });

      // @ts-ignore
      test('for 155 days with 25.47% discount', () => {
        const actual = priceWithMonthlyDiscount(29.654321, 155, 0.2547);
        const expected = 27467;
        // @ts-ignore
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });
  });
});
