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