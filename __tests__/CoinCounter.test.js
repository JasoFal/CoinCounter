describe('CoinCounter', () => {

  test('should exit if not a number', () => {
    const CoinCounter = (TotalMoney) => {
      if (isNaN(TotalMoney)) {
        return;
      }
    }
    expect(CoinCounter("In")).toEqual();
  });
});