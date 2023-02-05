import { createSlice } from '@reduxjs/toolkit';

const subscriptionTypes = [
  {
    type: 'Arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
    icon: '/images/icon-arcade.svg',
  },
  {
    type: 'Advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
    icon: '/images/icon-advanced.svg',
  },
  {
    type: 'Pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
    icon: 'images/icon-pro.svg',
  },
];

const subscribeSettingsSlice = createSlice({
  name: 'subscribeSettings',
  initialState: {
    subType: subscriptionTypes[0].type,
    isMonthly: true,
  },
  reducers: {
    setSubType: (state, action) => {
      state.subType = action.payload;
    },
    setSubPayment: (state) => {
      state.isMonthly = !state.isMonthly;
    },
  },
});

export const { setSubType, setSubPayment } = subscribeSettingsSlice.actions;
export { subscriptionTypes };
export default subscribeSettingsSlice.reducer;
