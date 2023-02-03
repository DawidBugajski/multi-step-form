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
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setFullName, setPhoneNumber, setEmail, setError } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
