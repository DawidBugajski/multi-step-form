import { configureStore } from '@reduxjs/toolkit';
import stepsSlice from './slices/stepsSlice';
import personalInfoSlice from './slices/personalInfoSlice';

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
    personalInfo: personalInfoSlice,
  },
});
