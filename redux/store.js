import { configureStore } from "@reduxjs/toolkit";
import seasonReducer from "./seasonSlice";
import searchReducer from "./searchSlice";
import animeReducer from "./animeApi";
import animeEpisodesReducer from "./animeEpisodesSlice";
import animeSynopsisReducer from "./animeSynopsisSlice";
import themesReducer from "./themesSlice";

export const store = configureStore({
  reducer: {
    season: seasonReducer,
    search: searchReducer,
    anime: animeReducer,
    episodes: animeEpisodesReducer,
    synopsis: animeSynopsisReducer,
    theme: themesReducer,
  },
});
