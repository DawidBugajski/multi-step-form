import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    currentStep: 2,
  },
  reducers: {
    setNextStep: (state) => {
      state.currentStep += 1;
    },
    setPrevStep: (state) => {
      if (state.currentStep !== 1) {
        state.currentStep -= 1;
      }
    },
    setSecondStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setNextStep, setPrevStep, setSecondStep } = stepsSlice.actions;
export default stepsSlice.reducer;
