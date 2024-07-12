describe('CoinCounter', () => {

  test('should exit if not a number', () => {
    const CoinCounter = (TotalMoney) => {
      if (isNaN(TotalMoney)) {
        return;
      }
    }
    expect(CoinCounter("In")).toEqual();
  });

  test('should give the correct amount of quarters', () => {
    let quarters = 0;
    const CoinCounter = (totalMoney) => {
      if (isNaN(totalMoney)) {
        return null;
      }
      if (totalMoney >= .25) {
        quarters ++;
        return CoinCounter(totalMoney - .25);
      }
    }
    CoinCounter(1);
    expect(quarters).toEqual(4);
  });

  test('should give the correct amount of dimes', () => {
    let quarters = 0;
    let dimes = 0;
    const CoinCounter = (totalMoney) => {
      if (isNaN(totalMoney)) {
        return null;
      }
      if (totalMoney >= .25) {
        quarters ++;
        return CoinCounter(totalMoney - .25);
      } else if (totalMoney >= .1) {
        dimes ++;
        return CoinCounter(totalMoney - .1)
      }
    }
    CoinCounter(.2);
    console.log(dimes, "dimes");
    expect(dimes).toEqual(2);
  });
});