import React from 'react';
import { addonTypes } from 'store/slices/additionalAddonsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { paymentPeriod } from 'utils/helpers/paymentPeriod';
import {
  setAddAddon,
  setRemoveAddon,
} from 'store/slices/additionalAddonsSlice';
import { activeAddon } from 'utils/helpers/activeAddon';

const AddonCards = () => {
  const dispatch = useDispatch();
  const { pickedAddons } = useSelector((state) => state.addons);
  const { isMonthly } = useSelector((state) => state.subscribeSettings);

  const handleCheckboxClick = (addon) => {
    const alreadySelected = pickedAddons.find(
      (selectedAddon) => selectedAddon.type === addon.type
    );
    alreadySelected
      ? dispatch(setRemoveAddon(addon))
      : dispatch(setAddAddon(addon));
  };

  return (
    <div>
      {addonTypes.map(({ type, price, text }) => (
        <div
          className={`flex rounded-lg border-[1px] items-center p-3 mb-3 ${activeAddon(
            type,
            pickedAddons
          )}`}
          key={type}
        >
          <input
            className='mr-4 cursor-pointer h-[20px] w-[20px] rounded-sm'
            type='checkbox'
            onChange={() => handleCheckboxClick({ type, price })}
            checked={pickedAddons.some(
              (selectedAddon) => selectedAddon.type === type
            )}
          />

          <div className='flex flex-col flex-grow tracking-tight'>
            <h3 className='text-lg font-medium text-darkBlue lg:font-bold'>
              {type}
            </h3>
            <p className='text-sm font-medium text-coolGray lg:text-md'>
              {text}
            </p>
          </div>
          <p className='text-xs font-medium text-purplishBlue'>{`+$${paymentPeriod(
            price,
            isMonthly
          )}`}</p>
        </div>
      ))}
    </div>
  );
};

export default AddonCards;
