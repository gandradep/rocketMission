import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rocketAction';

const store = configureStore({
  reducer: { rocket: rocketReducer, missions: missionsReducer },
});

export default store;
