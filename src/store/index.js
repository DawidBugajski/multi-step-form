import { configureStore } from '@reduxjs/toolkit';
import stepsSlice from './slices/stepsSlice';

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
  },
});
