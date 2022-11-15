import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketAction';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
