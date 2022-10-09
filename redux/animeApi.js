import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeApi from "../api/animeApi";

export const getData = createAsyncThunk("anmie", async (id) => {
  const res = await animeApi.get(id);
  return res;
});

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    allData: {
      data: {
        images: {
          jpg: {
            image: [],
          },
        },
        studios: [],
        genres: [],
      },
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

const { reducer: animeReducer } = animeSlice;
export default animeReducer;
