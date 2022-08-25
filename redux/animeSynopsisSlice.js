import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeSynopsis from "../api/animeSynopsis";

export const getDataSynopsis = createAsyncThunk(
  "anmieSynopsis",
  async ( {id , episodes} ) => {
    const res = await animeSynopsis.get(id, episodes);
    return res;
  }
);

const animeSynopsisSlice = createSlice({
  name: "animeSynopsis",
  initialState: {
    allData: {
      data: {
        synopsis: []
      }
    },
    loading: false,
    error: false,
  },
  reducers: {
  },

  extraReducers: {
    [getDataSynopsis.pending]: (state) => {
      state.loading = true;
    },

    [getDataSynopsis.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getDataSynopsis.fulfilled]: (state, action) => {
      state.loading = false;
      state.allData = action.payload;
    },
  },
});


const { reducer: animeSynopsisReducer } = animeSynopsisSlice;
export default animeSynopsisReducer;