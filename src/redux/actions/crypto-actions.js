import {types} from './types';

export const transferCredits = (coinName, amountOfCoins) => ({
  type: types.TRANSFER_CREDITS,
  payload: { coinName, amountOfCoins },
});


export const loadCoinsData  = (coinsData) => ({
  type: types.LOAD_COINS_DATA,
  payload: { coinsData },
});

