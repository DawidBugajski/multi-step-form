import { createSlice } from '@reduxjs/toolkit';

const subscriptionTypes = [
  {
    type: 'Arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
    icon: '/src/assets/images/icon-arcade.svg',
  },
  {
    type: 'Advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
    icon: '/src/assets/images/icon-advanced.svg',
  },
  {
    type: 'Pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
    icon: '/src/assets/images/icon-pro.svg',
  },
];

const subscriptionTypesPayments = ['Monthly', 'Yearly'];

const subscribeSettingsSlice = createSlice({
  name: 'subscribeSettings',
  initialState: {
    subType: subscriptionTypes[0].type,
    subPayment: subscriptionTypesPayments[0],
  },
  reducers: {
    setSubType: (state, action) => {
      state.subType = action.payload;
    },
    setSubPayment: (state, action) => {
      state.subPayment = action.payload;
    },
  },
});

export const { setSubType, setSubPayment } = subscribeSettingsSlice.actions;
export default subscribeSettingsSlice.reducer;
