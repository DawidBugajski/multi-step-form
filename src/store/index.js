import { configureStore } from '@reduxjs/toolkit';
import stepsSlice from './slices/stepsSlice';
import personalInfoSlice from './slices/personalInfoSlice';
import subscribeSettingsSlice from './slices/subscribeSettingsSlice';
import additionalAddonsSlice from './slices/additionalAddonsSlice';

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
    personalInfo: personalInfoSlice,
    subscribeSettings: subscribeSettingsSlice,
    addons: additionalAddonsSlice,
  },
});
