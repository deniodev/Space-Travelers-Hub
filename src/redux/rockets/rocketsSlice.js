import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  isFetched: false,
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
    cancelRocket(state, action) {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state, status: 'succeeded', rockets: action.payload, isFetched: true,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
