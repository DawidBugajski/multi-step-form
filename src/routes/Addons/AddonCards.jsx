import React from 'react';
import { addonTypes } from 'store/slices/additionalAddonsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { paymentPeriod } from 'utils/helpers/paymentPeriod';
import { activeSubscriptionType } from 'utils/helpers/activeSubscriptionType';
import {
  setAddAddon,
  setRemoveAddon,
} from 'store/slices/additionalAddonsSlice';

const AddonCards = () => {
  const dispatch = useDispatch();
  const { pickedAddons } = useSelector((state) => state.addons);

  const handleCheckboxChange = (addon) => {
    if (pickedAddons.find((a) => a.type === addon.type)) {
      dispatch(setRemoveAddon(addon));
      console.log(pickedAddons);
    } else {
      dispatch(setAddAddon(addon));
      console.log(pickedAddons);
    }
  };
  return (
    <div className=''>
      {addonTypes.map(({ type, price, text }) => (
        <div
          className='flex rounded-lg border-[1px] items-center p-3 mb-3'
          key={type}
        >
          <input
            onChange={() => handleCheckboxChange({ type, price, text })}
            className='mr-4 cursor-pointer h-[20px] w-[20px] rounded-sm'
            type='checkbox'
          />

          <div className='flex flex-col '>
            <h3 className='text-lg font-medium text-darkBlue'>{type}</h3>
            <p className=' text-coolGray'>{text}</p>
          </div>
          <p className='mx-auto'>{price.monthly}</p>
        </div>
      ))}
    </div>
  );
};

export default AddonCards;

/*
TODO
- after clicking the checkbox, add this information to the pickedAddons
- when you unclick, delete this from pickedAddons
- if something is in pickedAddons then use activeSubscriptionType function to change the CSS styles
- verify payment period and using paymentPeriod.js where it is currently <p>price.monthly</p> display it the same way as in the stepper before
- verify slice
*/
