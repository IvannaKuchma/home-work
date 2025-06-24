import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice.js';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
