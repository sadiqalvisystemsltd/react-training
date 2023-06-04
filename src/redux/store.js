import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './reducers/crypto-reducer';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  }
});

export default store;