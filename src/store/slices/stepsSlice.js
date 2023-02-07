import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    currentStep: 1,
    isConfirmed: false,
  },
  reducers: {
    setNextStep: (state) => {
      if (state.currentStep !== 4) {
        state.currentStep += 1;
      }
    },
    setPrevStep: (state) => {
      if (state.currentStep !== 1) {
        state.currentStep -= 1;
      }
    },
    setSecondStep: (state) => {
      state.currentStep = 2;
    },
    setConfirmed: (state) => {
      state.isConfirmed = true;
    },
  },
});

export const { setNextStep, setPrevStep, setSecondStep, setConfirmed } =
  stepsSlice.actions;
export default stepsSlice.reducer;
