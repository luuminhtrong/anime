import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themesApi from "../api/themesApi";

export const getData = createAsyncThunk("themes", async (title) => {
  const res = await themesApi.get(title);
  return res;
});

const themesSlice = createSlice({
  name: "themes",
  initialState: {
    data: [],
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
      state.data = [];
    },

    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.anime.animethemes;
    },
  },
});

const { reducer: themesReducer } = themesSlice;
export default themesReducer;