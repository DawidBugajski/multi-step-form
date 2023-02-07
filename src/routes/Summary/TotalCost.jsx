import React from 'react';
import { useSelector } from 'react-redux';

const TotalCost = () => {
  const { subType, isMonthly } = useSelector(
    (state) => state.subscribeSettings
  );
  const { pickedAddons } = useSelector((state) => state.addons);

  const getTotalCost = (isMonthly, subType, pickedAddons) => {
    let totalCost = 0;
    const { monthly: subTypeMonthly, yearly: subTypeYearly } = subType.price;
    totalCost += isMonthly ? subTypeMonthly : subTypeYearly;

    pickedAddons.forEach(({ price: { monthly, yearly } }) => {
      totalCost += isMonthly ? monthly : yearly;
    });

    return totalCost;
  };
  return (
    <div className='flex justify-between p-5'>
      <p className='text-coolGray'>
        Total {isMonthly ? '(per month)' : '(per year)'}
      </p>
      <p className='font-bold text-purplishBlue'>
        {`$${getTotalCost(isMonthly, subType, pickedAddons)}${
          isMonthly ? '/mo' : '/yr'
        }`}
      </p>
    </div>
  );
};

export default TotalCost;
