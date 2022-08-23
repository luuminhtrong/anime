import { configureStore } from '@reduxjs/toolkit'
import seasonReducer from './seasonSlice'
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    season: seasonReducer,
    search: searchReducer,
  },
})