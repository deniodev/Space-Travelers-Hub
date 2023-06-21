import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  isFetched: false,
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},

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
