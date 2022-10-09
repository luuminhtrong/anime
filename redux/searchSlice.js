import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "../api/searchApi";

export const getData = createAsyncThunk("search", async (value) => {
  const res = await searchApi.get(value);
  return res;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    allData: {
      data: [],
    },
    loading: false,
    error: false,
  },
  reducers: {},

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

const { reducer: searchReducer } = searchSlice;
export default searchReducer;
