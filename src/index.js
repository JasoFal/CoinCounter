let quarters = 0;
let dimes = 0;
let nickles = 0;
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
  } else if (totalMoney >= .05) {
    nickles ++;
    return CoinCounter(totalMoney - .05);
  }
}