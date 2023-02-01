import { createSlice } from '@reduxjs/toolkit';

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState: {
    fullName: '',
    phoneNumber: '',
    email: '',
    error: false,
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
      // console.log(state.fullName);
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      // console.log(state.phoneNumber);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      // console.log(state.email);
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setFullName, setPhoneNumber, setEmail, setError } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
