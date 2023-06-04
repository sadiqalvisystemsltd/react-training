
const initialState = {
  coinsData: [],
};


const transferCoins = (state, coinName, amountOfCoins) => {
  let coinsDataCopy = [...state.coinsData];
  for(var k = 0; k < state.coinsData.length; k++) {
    if (coinsDataCopy[k]["cryptoCoin"] == coinName) {
      var currAmount = parseFloat(coinsDataCopy[k]["amount"])
      let finalAmount = currAmount - amountOfCoins;
      if(finalAmount >= 0) {
        coinsDataCopy[k]["amount"] = finalAmount;
      }
    }
  }
  return coinsDataCopy;
};


const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_COINS_DATA':
      return {
        ...state,
        coinsData: action.payload?.coinsData,
      };
    case 'TRANSFER_CREDITS':
      return {
        ...state,
        coinsData: transferCoins(state, action.payload?.coinName, action.payload?.amountOfCoins)
      }
    default:
      console.log("Reducer called!", state);      
      return state;
  }
};

export default cryptoReducer;
