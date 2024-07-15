import { CoinCounter } from "../src";

describe('CoinCounter', () => {

  test('should exit if not a number', () => {
    const result = CoinCounter("string");
    expect(result).toEqual(null);
  });

  test('should give the correct amount of quarters', () => {
    const result = CoinCounter(1);
    expect(result).toEqual({"dimes": 0, "nickles": 0, "pennies": 0, "quarters": 4});
  });

  test('should give the correct amount of dimes', () => {
    const result = CoinCounter(.2);
    expect(result).toEqual({"dimes": 2, "nickles": 0, "pennies": 0, "quarters": 0});
  });

  test('should give the correct amount of nickles', () => {
    const result = CoinCounter(.05);
    expect(result).toEqual({"dimes": 0, "nickles": 1, "pennies": 0, "quarters": 0});
  });

  test('should give the correct amount of pennies', () => {
    const result = CoinCounter(.04);
    expect(result).toEqual({"dimes": 0, "nickles": 0, "pennies": 4, "quarters": 0});
  });
});