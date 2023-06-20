import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './mission/MissionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: MissionReducer,
    rockets: rocketReducer,
  },
});

export default store;
