import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './missions/MissionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: MissionReducer,
    rockets: rocketReducer,
  },
});

export default store;
