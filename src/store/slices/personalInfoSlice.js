import { createSlice } from '@reduxjs/toolkit';

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState: {
    fullName: '',
    phoneNumber: '',
    email: '',
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
      console.log(state.fullName);
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      console.log(state.phoneNumber);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      console.log(state.email);
    },
  },
});

export const { setFullName, setPhoneNumber, setEmail } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
