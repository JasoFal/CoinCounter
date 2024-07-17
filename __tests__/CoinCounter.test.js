import { coinCounter } from "../src";
import { coinCounterWithClosures } from "../src";

describe('CoinCounter', () => {

  test('should exit if not a number', () => {
    const result = coinCounter("string");
    expect(result).toEqual(null);
  });

  test('should give the correct amount of quarters', () => {
    const result = coinCounter(1);
    expect(result).toEqual({"dimes": 0, "nickles": 0, "pennies": 0, "quarters": 4});
  });

  test('should give the correct amount of dimes', () => {
    const result = coinCounter(.2);
    expect(result).toEqual({"dimes": 2, "nickles": 0, "pennies": 0, "quarters": 0});
  });

  test('should give the correct amount of nickles', () => {
    const result = coinCounter(.05);
    expect(result).toEqual({"dimes": 0, "nickles": 1, "pennies": 0, "quarters": 0});
  });

  test('should give the correct amount of pennies', () => {
    const result = coinCounter(.04);
    expect(result).toEqual({"dimes": 0, "nickles": 0, "pennies": 4, "quarters": 0});
  });
});

describe('coinCounterWithClosures', () => {

  test('should return null if not a number', () => {
    const result = coinCounterWithClosures();
    expect(result("string")).toEqual(null);
  });

  test('should give the correct amount of quarters', () => {
    const result = coinCounterWithClosures(1)();
    expect(result).toEqual({"dimes": 0, "nickles": 0, "pennies": 0, "quarters": 4})
  });

  test('should give the correct amount of dimes', () => {
    const result = coinCounterWithClosures(.2)();
    expect(result).toEqual({"dimes": 2, "nickles": 0, "pennies": 0, "quarters": 0});
  });
});