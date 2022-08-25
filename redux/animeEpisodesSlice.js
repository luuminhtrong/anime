import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeEpisodesApi from "../api/animeEpisodesApi";
import animeSynopsis from "../api/animeSynopsis";



export const getDataEpisodes = createAsyncThunk(
  "anmieEpisodes",
  async ( id ) => {
    const res = await animeEpisodesApi.get(id);
    return res;
  }
);

export const getDataSynopsis = createAsyncThunk(
  "anmieEpisodes/getSynopsis",
  async ( {id , episodes} ) => {
    const res = await animeSynopsis.get(id, episodes);
    return res;
  }
);

const animeEpisodesSlice = createSlice({
  name: "animeEpisodes",
  initialState: {
    allData: {
        data: []
    },
    loading: false,
    error: false,
  },
  reducers: {
  },

  extraReducers: {
    [getDataEpisodes.pending]: (state) => {
      state.loading = true;
    },

    [getDataEpisodes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getDataEpisodes.fulfilled]: (state, action) => {
      state.loading = false;
      state.allData = action.payload;
    },
    [getDataSynopsis.fulfilled]: (state, action) => {
      const newEpList = state.allData.data.map((ep) => ep)
      const epToConsiderIndex = newEpList.findIndex((episode) => episode.mal_id === action.payload.data.mal_id)
      newEpList[epToConsiderIndex].synopsis = action.payload.data.synopsis || "(no synopsis)"
      state.allData.data = newEpList
    },
  },
});


const { reducer: animeEpisodesReducer } = animeEpisodesSlice;
export default animeEpisodesReducer;