import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import seasonalApi from "../api/seasonalApi";

export const getData = createAsyncThunk(
  "season",
  async ({ year, seasonal, page }) => {
    const res = await seasonalApi.get(year, seasonal, page);
    return res.data;
  }
);

const seasonSlice = createSlice({
  name: "season",
  initialState: {
    allData: [],
    loading: false,
    error: false,
  },
  reducers: {
    DESC: (state, action) => {
      state.allData = [...current(state.allData)].sort((a, b) => {
        if (a[action.payload] > b[action.payload]) return -1;
        if (a[action.payload] < b[action.payload]) return 1;
        return 0;
      });
    },
    ASC: (state, action) => {
      state.allData = [...current(state.allData)].sort((a, b) => {
        if (a[action.payload] > b[action.payload]) return 1;
        if (a[action.payload] < b[action.payload]) return -1;
        return 0;
      });
    },
  },

  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },

    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.allData = action.payload;
    },
  },
});

export const { ASC, DESC } = seasonSlice.actions;
const { reducer: seasonReducer } = seasonSlice;
export default seasonReducer;
