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
        console.log(totalMoney);
        return CoinCounter(totalMoney - .25);
      }
    }
    CoinCounter(1);
    console.log(quarters, "quarters");
    expect(quarters).toEqual(4);
  });
});