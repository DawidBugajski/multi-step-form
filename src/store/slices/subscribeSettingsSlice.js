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
      state.isMonthly = false;
    },
  },
});

export const { setSubType, setSubPayment } = subscribeSettingsSlice.actions;
export { subscriptionTypes };
export default subscribeSettingsSlice.reducer;

// jak zweryfikować czy subType i subPayment jest prawidłowo połączone z subscriptionTypes i subscriptionTypesPayments
// ! coś tu jest nie tak z tym połączeniem
