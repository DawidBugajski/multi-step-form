import React from 'react';
import { useSelector } from 'react-redux';

const TotalCost = () => {
  const { subType, isMonthly } = useSelector(
    (state) => state.subscribeSettings
  );
  const { pickedAddons } = useSelector((state) => state.addons);

  const TotalCost = (isMonthly, subType, pickedAddons) => {
    let totalCost = 0;
    if (isMonthly) {
      totalCost += subType.price.monthly;
      pickedAddons.forEach((addon) => {
        if (addon.price) {
          totalCost += addon.price.monthly;
        }
      });
    } else {
      totalCost += subType.price.yearly;
      pickedAddons.forEach((addon) => {
        if (addon.price) {
          totalCost += addon.price.yearly;
        }
      });
    }
    return totalCost;
  };

  return (
    <div className='flex justify-between p-5'>
      <p className='text-coolGray'>
        Total {isMonthly ? '(per month)' : '(per year)'}
      </p>
      <p className='font-bold text-purplishBlue'>
        {`$${TotalCost(isMonthly, subType, pickedAddons)}${
          isMonthly ? '/mo' : '/yr'
        }`}
      </p>
    </div>
  );
};

export default TotalCost;

// refaktoryzacja
