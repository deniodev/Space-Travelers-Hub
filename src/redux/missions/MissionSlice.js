import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

const getMissions = createAsyncThunk(
  'missions/fecth-missions',
  async (thunkAPI) => {
    try {
      const response = await fetch(missionUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Try Again!');
    }
  },
);

const initialState = {
  missions: [],
};

const MissionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const set = action.payload.map((mission) => ({
        ...mission,
        member: false,
      }));
      return {
        ...state,
        missions: set,
      };
    });
  },
});

export { getMissions };
export default MissionSlice.reducer;
