import { configureStore } from '@reduxjs/toolkit'
import seasonReducer from './seasonSlice'

export const store = configureStore({
  reducer: {
    season: seasonReducer,
  },
})