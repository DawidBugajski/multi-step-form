import { createSlice } from '@reduxjs/toolkit';

const addonTypes = [
  {
    type: 'Online service',
    text: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    type: 'Larger storage',
    text: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    type: 'Customizable profile',
    text: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const additionalAddonsSlice = createSlice({
  name: 'addons',
  initialState: {
    pickedAddons: [],
  },
  reducers: {
    setAddAddon: (state, action) => {
      state.pickedAddons.push(action.payload);
    },
    setRemoveAddon: (state, action) => {
      const itemIndex = state.pickedAddons.findIndex(
        (addon) => addon.type === action.payload.type
      );
      state.pickedAddons.splice(itemIndex, 1);
    },
  },
});

export const { setAddAddon, setRemoveAddon } = additionalAddonsSlice.actions;
export { addonTypes };
export default additionalAddonsSlice.reducer;
