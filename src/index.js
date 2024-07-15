export const coinCounter = (totalMoney, coinsObj = { "quarters" : 0, "dimes" : 0, "nickles" : 0, "pennies" : 0 }) => {
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
    return coinCounter(totalMoney - .25, coinsObj);
  } else if (totalMoney >= .1) {
    coinsObj["dimes"] ++;
    return coinCounter(totalMoney - .1, coinsObj);
  } else if (totalMoney >= .05) {
    coinsObj["nickles"] ++;
    return coinCounter(totalMoney - .05, coinsObj);
  } else if (totalMoney >= 0) {
    coinsObj["pennies"] ++;
    return coinCounter(totalMoney - .01, coinsObj);
  }
}

// console.log(CoinCounter(5.99));

export const coinCounterWithClosures = (totalMoney) => {
  let coinsObj = { "quarters" : 0, "dimes" : 0, "nickles" : 0, "pennies" : 0 };
  console.log(totalMoney, "starterTotalMoney");
  return function() {
    if (isNaN(totalMoney)) {
      console.log(totalMoney, "totalMoney");
      return null;
    }
    console.log(coinsObj, "coinsObj");
    totalMoney = totalMoney.toFixed(2);
    if (totalMoney == 0) {
      return coinsObj;
    }
  }
}

// const test = coinCounterWithClosures(5.99);
// console.log(coinCounterWithClosures("string")()());