export const CoinCounter = (totalMoney, coinsObj = { "quarters" : 0, "dimes" : 0, "nickles" : 0, "pennies" : 0 }) => {
  if (isNaN(totalMoney)) {
    return null;
  }
  totalMoney = totalMoney.toFixed(2);
  if (totalMoney == 0)
  {
    return coinsObj;
  }
  // console.log(totalMoney, "totalMoney")
  // console.log(coinsObj, "coinsObj");
  if (totalMoney >= .25) {
    coinsObj["quarters"]++;
    return CoinCounter(totalMoney - .25, coinsObj);
  } else if (totalMoney >= .1) {
    coinsObj["dimes"] ++;
    return CoinCounter(totalMoney - .1, coinsObj);
  } else if (totalMoney >= .05) {
    coinsObj["nickles"] ++;
    return CoinCounter(totalMoney - .05, coinsObj);
  } else if (totalMoney >= 0) {
    coinsObj["pennies"] ++;
    return CoinCounter(totalMoney - .01, coinsObj);
  }
}

// console.log(CoinCounter(5.99));

export function CoinCounterWithClosures(totalMoney)
{
  return function() {
    console.log(totalMoney, coinsObj = { "quarters" : 0, "dimes" : 0, "nickles" : 0, "pennies" : 0 });
    if (isNaN(totalMoney)) {
      return null;
    }
    return function() {
      totalMoney = totalMoney.toFixed(2);
      if (totalMoney == 0) {
        return coinsObj;
      }
    }
  }
}

